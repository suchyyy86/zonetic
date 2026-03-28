import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyZonetic from "@/components/WhyZonetic";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyZonetic />
      <Services />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

