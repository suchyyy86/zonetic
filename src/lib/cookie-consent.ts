const CONSENT_KEY = "zonetic-cookie-consent";
const CONSENT_EXPIRY_KEY = "zonetic-cookie-consent-expiry";
const EXPIRY_DAYS = 90;

export type ConsentState = "undecided" | "accepted" | "rejected";

export function getCookieConsent(): ConsentState {
  const expiry = localStorage.getItem(CONSENT_EXPIRY_KEY);
  if (expiry && Date.now() > Number(expiry)) {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_EXPIRY_KEY);
    return "undecided";
  }
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return "undecided";
}

export function setCookieConsent(state: "accepted" | "rejected") {
  localStorage.setItem(CONSENT_KEY, state);
  localStorage.setItem(
    CONSENT_EXPIRY_KEY,
    String(Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000),
  );
  window.dispatchEvent(new Event("cookie-consent-change"));
}
