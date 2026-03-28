import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Zpráva odeslána!", {
      description: "Děkujeme, ozveme se vám co nejdříve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt">
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
              Šetříme váš čas i peníze,<br />na každém kroku
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Efektivní řešení, která vám přináší skutečnou hodnotu.
            </p>
            <a href="#kontakt-formular">
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
      <div id="kontakt-formular" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Napište nám
            </h2>
            <p className="text-muted-foreground text-lg">
              Máte projekt na mysli? Rádi si o něm promluvíme.
            </p>
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
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Jméno
              </label>
              <Input
                id="name"
                placeholder="Vaše jméno"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.cz"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Zpráva
              </label>
              <Textarea
                id="message"
                placeholder="Popište váš projekt..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="rounded-xl bg-background resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base"
            >
              Odeslat
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
