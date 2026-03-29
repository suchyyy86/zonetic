import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === "undecided") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    setCookieConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-foreground/80 flex-1">
            Tento web používá analytické cookies pro měření návštěvnosti a
            zlepšení služeb.{" "}
            <a
              href="/ochrana-udaju"
              className="underline hover:text-foreground"
            >
              Více informací
            </a>
          </p>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="rounded-full"
            >
              Odmítnout
            </Button>
            <Button size="sm" onClick={handleAccept} className="rounded-full">
              Přijmout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
