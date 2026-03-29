import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak dlouho trvá vytvoření webových stránek?",
    answer: "Standardní prezentační weby dodáváme v průměru do 14 dnů od obdržení podkladů. Složitější weby a rezervační systémy zaberou obvykle 3 až 5 týdnů. Přesný a závazný termín získáte vždy ještě před zahájením spolupráce.",
  },
  {
    question: "Kolik stojí tvorba webu?",
    answer: "Každý projekt naceňujeme individuálně podle požadovaných funkcí a grafického rozsahu. Po úvodní e-mailové nebo telefonické domluvě od nás obdržíte přesnou kalkulaci. Za svými čísly si pevně stojíme a nehrozí vám žádné skryté poplatky.",
  },
  {
    question: "Co vše potřebuji dodat před začátkem projektu?",
    answer: "Ideálně základní firemní identitu (logo) a stěžejní textové podklady (jídelní lístek, ceník a podobně). Pokud ale drtivou většinu věcí zatím nemáte, žádný problém – weby designujeme od nuly a s texty i tvorbou podkladů vám rádi kompletně pomůžeme.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Často kladené otázky
          </h2>
          <p className="text-muted-foreground text-lg">
            Odpovědi na nejčastější otázky ohledně tvorby webových stránek.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
