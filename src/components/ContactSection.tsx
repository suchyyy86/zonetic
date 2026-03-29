import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Nepodařilo se odeslat zprávu.");
      }

      toast.success("Zpráva odeslána!", {
        description: "Děkujeme, ozveme se vám co nejdříve.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      toast.error("Odeslání selhalo", {
        description:
          "Došlo k chybě při odesílání zprávy. Pokud problém přetrvává, napište nám přímo na e-mail.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-baltic to-baltic-light py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Váš čas je drahý.
              <br />
              Nechte vývoj na nás.
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Získejte moderní a rychlý web bez technických kompromisů, za
              mimořádně kompetitivní cenu.
            </p>
            <a href="#kontakt">
              <Button
                size="lg"
                className="bg-white text-baltic hover:bg-white/90 rounded-full px-8 text-base font-semibold"
              >
                Kontaktujte nás
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="kontakt" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Napište nám
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Jméno
              </label>
              <Input
                id="name"
                placeholder="Vaše jméno"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="rounded-xl bg-background"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.cz"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="rounded-xl bg-background"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Telefon{" "}
                  <span className="text-muted-foreground text-xs">
                    (volitelně)
                  </span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+420..."
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="rounded-xl bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Název firmy{" "}
                  <span className="text-muted-foreground text-xs">
                    (volitelně)
                  </span>
                </label>
                <Input
                  id="company"
                  placeholder="Vaše firma s.r.o."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="rounded-xl bg-background"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Zpráva
              </label>
              <Textarea
                id="message"
                placeholder="Váš požadavek..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="rounded-xl bg-background resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base"
            >
              {isSubmitting ? "Odesílám..." : "Odeslat"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Odesláním formuláře souhlasíte se{" "}
              <Link
                to="/ochrana-udaju"
                className="underline hover:text-foreground transition-colors"
              >
                zásadami ochrany osobních údajů
              </Link>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
