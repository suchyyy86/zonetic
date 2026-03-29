const CONSENT_KEY = "zonetic-cookie-consent";

export type ConsentState = "undecided" | "accepted" | "rejected";

export function getCookieConsent(): ConsentState {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return "undecided";
}

export function setCookieConsent(state: "accepted" | "rejected") {
  localStorage.setItem(CONSENT_KEY, state);
  window.dispatchEvent(new Event("cookie-consent-change"));
}
