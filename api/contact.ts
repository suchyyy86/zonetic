import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Chybí povinné údaje (jméno, e-mail, zpráva).' });
  }

  try {
    const { data, error } = await resend.emails.send({
      // POZNÁMKA PRONASTAVENÍ RESENDU:
      // Pokud nemáte v Resendu ověřenou doménu zonetic.cz, musíte jako from použít 'onboarding@resend.dev'
      // a e-mail 'mariusz.suchanek@zonetic.cz' musí být ten, který máte v Resendu registrovaný!
      // Pokud máte doménu připojenou a ověřenou, můžete použít např. 'Zonetic Form <formular@zonetic.cz>'
      from: 'Zonetic Web Form <onboarding@resend.dev>',
      to: 'mariusz.suchanek@zonetic.cz',
      subject: `Nová zpráva od: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0b1c3c; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Nová poptávka z webu Zonetic</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>Jméno:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>E-mail:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'Nezadán'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Společnost:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'Nezadána'}</td>
            </tr>
          </table>

          <h3 style="color: #0b1c3c;">Zpráva:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0ea5e9; line-height: 1.5;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
