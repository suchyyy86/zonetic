import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "kontakt@zonetic.cz";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, company, message, website } = req.body;

  // Honeypot — hidden field "website" should be empty
  if (website) {
    // Silently accept to not reveal the trap
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Chybí povinné údaje (jméno, e-mail, zpráva)." });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({ message: "Neplatný formát údajů." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json({ message: "Neplatný formát e-mailové adresy." });
  }

  if (name.length > 200) {
    return res
      .status(400)
      .json({ message: "Jméno je příliš dlouhé (max 200 znaků)." });
  }

  if (message.length > 5000) {
    return res
      .status(400)
      .json({ message: "Zpráva je příliš dlouhá (max 5000 znaků)." });
  }

  if (phone && (typeof phone !== "string" || phone.length > 30)) {
    return res.status(400).json({ message: "Neplatný formát telefonu." });
  }

  if (company && (typeof company !== "string" || company.length > 200)) {
    return res.status(400).json({ message: "Název firmy je příliš dlouhý." });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "");
  const safeCompany = escapeHtml(company || "");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  try {
    const { data, error } = await resend.emails.send({
      from: "Zonetic Web Form <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Nová zpráva od: ${safeName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0b1c3c; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Nová poptávka z webu Zonetic</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>Jméno:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>E-mail:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${safePhone || "Nezadán"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Společnost:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${safeCompany || "Nezadána"}</td>
            </tr>
          </table>

          <h3 style="color: #0b1c3c;">Zpráva:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0ea5e9; line-height: 1.5;">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({
          message: "Nepodařilo se odeslat zprávu. Zkuste to prosím později.",
        });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Interní chyba serveru." });
  }
}
