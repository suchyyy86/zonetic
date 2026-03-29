import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookieConsent from "./components/CookieConsent.tsx";
import { getCookieConsent } from "./lib/cookie-consent.ts";

const App = () => {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(
    getCookieConsent() === "accepted",
  );

  useEffect(() => {
    const handleChange = () => {
      setAnalyticsAllowed(getCookieConsent() === "accepted");
    };
    window.addEventListener("cookie-consent-change", handleChange);
    return () =>
      window.removeEventListener("cookie-consent-change", handleChange);
  }, []);

  return (
    <TooltipProvider>
      <Sonner />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ochrana-udaju" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CookieConsent />
      {analyticsAllowed && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </TooltipProvider>
  );
};

export default App;
