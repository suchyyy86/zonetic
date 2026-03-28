import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import expertImg from "@/assets/expert-help.png";

const ExpertHelp = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Odborná pomoc kdykoli a kdekoli — na jedno kliknutí!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Získejte profesionální pomoc kdykoli ji potřebujete, ať jste kdekoli. Naše odborná podpora je vzdálená jen jedno kliknutí — rychlá, snadná a spolehlivá řešení.
            </p>
            <a href="#kontakt">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 text-base"
              >
                Pojďme si promluvit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={expertImg}
              alt="Odborná pomoc"
              loading="lazy"
              width={800}
              height={640}
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertHelp;
