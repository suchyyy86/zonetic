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
    answer: "Doba realizace závisí na rozsahu a složitosti projektu. Jednodušší prezentační weby zvládneme za 2–4 týdny, složitější projekty s vlastní funkcionalitou mohou trvat 6–10 týdnů. Přesný harmonogram stanovíme po úvodní konzultaci.",
  },
  {
    question: "Kolik stojí tvorba webu?",
    answer: "Cena se odvíjí od rozsahu projektu, požadované funkcionality a grafického návrhu. Každý projekt kalkulujeme individuálně po úvodní konzultaci, abyste přesně věděli, co za svou investici získáte. Nezávaznou nabídku vám rádi připravíme zdarma.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer: "Na začátku si probereme vaše potřeby a cíle. Následně připravíme grafický návrh, po jeho schválení přejdeme k vývoji. Průběžně vás informujeme o postupu a zapojujeme vás do klíčových rozhodnutí, aby výsledek odpovídal vašim představám.",
  },
  {
    question: "Co vše potřebuji dodat před začátkem projektu?",
    answer: "Ideálně nám dodejte texty, loga, fotografie a případně reference na weby, které se vám líbí. Pokud tyto materiály nemáte, jsme schopni vám s nimi pomoci — od copywritingu přes fotografování až po tvorbu grafických podkladů.",
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
          <Accordion type="single" collapsible className="space-y-3">
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
