import { motion } from "framer-motion";
import stepConsultation from "@/assets/step-consultation.png";
import stepDesign from "@/assets/step-design.png";
import stepDevelopment from "@/assets/step-development.png";
import stepLaunch from "@/assets/step-launch.png";

const steps = [
  {
    step: "01",
    title: "Konzultace & analýza",
    description: "Na začátku si sedneme a probereme vaše cíle, cílovou skupinu a představy o webu. Analyzujeme konkurenci a navrhneme strategii, která vám zajistí ty nejlepší výsledky.",
    image: stepConsultation,
  },
  {
    step: "02",
    title: "Návrh & design",
    description: "Vytvoříme grafický návrh, který odráží vaši značku. Navrhneme UX strukturu, wireframy a vizuální design — vše schvalujete vy, než přejdeme k vývoji.",
    image: stepDesign,
  },
  {
    step: "03",
    title: "Vývoj & implementace",
    description: "Váš web oživíme pomocí moderních technologií. Kódujeme responzivní, rychlé a SEO-optimalizované stránky. Průběžně vás informujeme o postupu.",
    image: stepDevelopment,
  },
  {
    step: "04",
    title: "Spuštění & bezstarostný provoz",
    description: "Po důkladném otestování web nasadíme a napojíme analytiku. Tím to ale nekončí – v rámci měsíční péče přebíráme kompletní technickou správu, prémiový výkonný hosting i bezpečnostní dohled. Vy se tak můžete plně věnovat svému byznysu.",
    image: stepLaunch,
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jak <span className="text-primary">vzniká váš web</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Od prvního nápadu po spuštění — provedeme vás celým procesem krok za krokem.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border w-full max-w-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={800}
                      height={640}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <span className="text-primary font-bold text-5xl md:text-6xl opacity-15 block mb-2">{item.step}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
