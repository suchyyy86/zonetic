import React, { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyZonetic from "@/components/WhyZonetic";
import Services from "@/components/Services";
import ErrorBoundary from "@/components/ErrorBoundary";

const FAQ = React.lazy(() => import("@/components/FAQ"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyZonetic />
      <Services />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="h-32 flex items-center justify-center text-muted-foreground">
              Načítání obsahu...
            </div>
          }
        >
          <FAQ />
          <ContactSection />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
