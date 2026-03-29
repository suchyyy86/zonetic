import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo_bg_remove.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Zonetic" className="h-8 md:h-10 mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Digitální partnerství bez kompromisů. Tvoříme bleskurychlé prémiové weby, které spolehlivě prodávají vaše služby za vás.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Navigace</h4>
            <ul className="space-y-2.5">
              <li><a href="#proc-zonetic" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">O nás</a></li>
              <li><a href="#sluzby" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Proces</a></li>
              <li><a href="#faq" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#kontakt" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Jdeme do toho?
            </h4>
            <p className="text-primary-foreground/60 text-sm mb-4 leading-relaxed">
              Napište nám o svém podniku. My obratem navrhneme postup, se kterým získáte prémiový výsledek bez technických starostí.
            </p>
            <a href="#kontakt">
              <Button className="bg-background text-foreground hover:bg-background/90 rounded-full px-6">
                Kontaktujte nás
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Zonetic. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
