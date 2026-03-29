import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const original = link?.getAttribute("href");
    if (link) {
      link.setAttribute("href", "https://www.zonetic.cz/ochrana-udaju");
    } else {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", "https://www.zonetic.cz/ochrana-udaju");
      document.head.appendChild(link);
    }
    return () => {
      if (original && link) link.setAttribute("href", original);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Zpět na hlavní stránku
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Zásady ochrany osobních údajů
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground/80 text-sm leading-relaxed">
          <p>Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            1. Správce osobních údajů
          </h2>
          <p>
            Správcem osobních údajů je provozovatel webu zonetic.cz.
            <br />
            Kontaktní e-mail pro záležitosti ochrany osobních údajů:{" "}
            <a
              href="mailto:gdpr@zonetic.cz"
              className="underline hover:text-foreground"
            >
              gdpr@zonetic.cz
            </a>
          </p>
          <p className="text-xs text-muted-foreground italic">
            Identifikační údaje (IČO, sídlo) budou doplněny po registraci
            živnostenského oprávnění.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Jaké údaje zpracováváme
          </h2>
          <p>
            Prostřednictvím kontaktního formuláře na tomto webu zpracováváme
            následující osobní údaje:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Jméno</li>
            <li>E-mailová adresa</li>
            <li>Telefonní číslo (pokud je vyplněno)</li>
            <li>Název firmy (pokud je vyplněn)</li>
            <li>Text zprávy</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Účel zpracování
          </h2>
          <p>
            Vaše osobní údaje zpracováváme výhradně za účelem odpovědi na vaši
            poptávku nebo dotaz odeslaný prostřednictvím kontaktního formuláře.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Právní základ zpracování
          </h2>
          <p>
            Právním základem zpracování je <strong>oprávněný zájem</strong>{" "}
            správce dle čl. 6 odst. 1 písm. f) Nařízení Evropského parlamentu a
            Rady (EU) 2016/679 (GDPR). Oprávněným zájmem je vyřízení vašeho
            dotazu, který jste sami iniciovali prostřednictvím kontaktního
            formuláře.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Příjemci údajů
          </h2>
          <p>
            Údaje z kontaktního formuláře jsou odesílány prostřednictvím služby{" "}
            <strong>Resend</strong> (Resend, Inc., USA), která zajišťuje
            doručení e-mailové zprávy správci. Data nejsou ukládána do žádné
            databáze — jsou zpracována výhradně formou e-mailové zprávy. Přenos
            dat do USA je zajištěn na základě odpovídajících záruk dle GDPR.
            Více informací o zabezpečení dat naleznete na{" "}
            <a
              href="https://resend.com/security"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              resend.com/security
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Doba uchování
          </h2>
          <p>
            Osobní údaje jsou uchovávány po dobu nezbytnou k vyřízení vaší
            poptávky, nejdéle však po dobu 6 měsíců od přijetí zprávy, pokud
            nedojde k navázání obchodní spolupráce.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Cookies
          </h2>
          <p>
            Tento web využívá analytické cookies prostřednictvím služby{" "}
            <strong>Vercel Analytics</strong> a{" "}
            <strong>Vercel Speed Insights</strong> za účelem měření návštěvnosti
            a výkonu webu. Tyto cookies jsou načítány pouze s vaším souhlasem,
            který můžete udělit nebo odmítnout prostřednictvím cookie lišty
            zobrazené při první návštěvě webu.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Vaše práva
          </h2>
          <p>
            V souvislosti se zpracováním vašich osobních údajů máte následující
            práva:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Právo na přístup</strong> — získat informace o tom, zda a
              jaké údaje o vás zpracováváme
            </li>
            <li>
              <strong>Právo na opravu</strong> — požadovat opravu nepřesných
              údajů
            </li>
            <li>
              <strong>Právo na výmaz</strong> — požadovat smazání vašich
              osobních údajů
            </li>
            <li>
              <strong>Právo na omezení zpracování</strong> — požadovat omezení
              zpracování za určitých podmínek
            </li>
            <li>
              <strong>Právo na přenositelnost</strong> — získat své údaje ve
              strukturovaném formátu
            </li>
            <li>
              <strong>Právo vznést námitku</strong> — vznést námitku proti
              zpracování na základě oprávněného zájmu
            </li>
            <li>
              <strong>Právo podat stížnost</strong> — podat stížnost u Úřadu pro
              ochranu osobních údajů (ÚOOÚ), Pplk. Sochora 27, 170 00 Praha 7,{" "}
              <a
                href="https://www.uoou.cz"
                className="underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.uoou.cz
              </a>
            </li>
          </ul>
          <p>
            Pro uplatnění svých práv nás kontaktujte na e-mailu{" "}
            <a
              href="mailto:gdpr@zonetic.cz"
              className="underline hover:text-foreground"
            >
              gdpr@zonetic.cz
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
