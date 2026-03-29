import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";

/* ── Animated counter hook ─────────────────────────────────── */
const useCounter = (target: number, duration = 2, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: duration,
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [target, duration, inView]);
  return count;
};

/* ── Data ──────────────────────────────────────────────────── */
const stats = [
  { value: 50, suffix: "+", label: "Dokončených projektů" },
  { value: 100, suffix: " %", label: "Spokojených klientů" },
  { value: 14, suffix: " Dní", label: "Průměrná doba dodání" },
  { value: 99, suffix: " %", label: "Skóre rychlosti webu" },
];

const testimonials = [
  {
    name: "Martin",
    role: "Majitel B2B distribuční firmy",
    text: "Zonetic nám překopali online prezentaci od základů. Rychlost načítání je teď úplně jinde a konečně působíme perfektně i před většími partnery ze zahraničí.",
    rating: 5,
  },
  {
    name: "Veronika",
    role: "E-commerce manažerka",
    text: "Přechod na moderní web na míru byl pro nás zásadní. Ihned po spuštění se nám zvedl konverzní poměr a hlavně odpadly časté technické výpadky z minulosti.",
    rating: 5,
  },
  {
    name: "Tomáš",
    role: "Majitel a provozovatel restaurace",
    text: "Cením si upřímného přístupu a dodržení včasného termínu dodání. Nový web konečně na úrovni reprezentuje náš podnik a pomáhá nám skvěle doplňovat kapacity a rezervace.",
    rating: 5,
  },
];

/* ── Stat card ─────────────────────────────────────────────── */
const StatCard = ({
  value,
  suffix,
  label,
  index,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  inView: boolean;
}) => {
  const count = useCounter(value, 1.8, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {count}
        {suffix}
      </span>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </motion.div>
  );
};

/* ── Component ─────────────────────────────────────────────── */
const WhyZonetic = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="proc-zonetic" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proč si vybrat <span className="text-primary">Zonetic</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Čísla mluví za nás. Přesvědčte se sami.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} inView={statsInView} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto mb-16 md:mb-24" />

        {/* Testimonials heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Co říkají naši klienti
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Přečtěte si, jak hodnotí spolupráci s&nbsp;námi.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="relative flex flex-col h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                „{t.text}"
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZonetic;
