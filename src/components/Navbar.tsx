import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const nav = {
  he: ["עבודות", "מחירים", "צור קשר"],
  en: ["Work", "Pricing", "Contact"],
};
const hrefs = ["#portfolio", "#pricing", "#contact"];

export default function Navbar() {
  const { theme, lang, toggleTheme, setLang } = useTheme();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      height: 60, padding: "0 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      direction: "ltr",
      background: scrolled || open ? "var(--bg)" : "transparent",
      borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      <span style={{ color: "var(--fg)", fontWeight: 800, fontSize: 16, letterSpacing: "0.06em" }}>
        RYNOX
      </span>

      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {nav[lang].map((item, i) => (
            <a key={i} href={hrefs[i]}
              style={{ color: "var(--fg-2)", fontSize: 14, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-2)")}>
              {item}
            </a>
          ))}
          <button onClick={() => setLang(lang === "he" ? "en" : "he")}
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 10px", color: "var(--fg-2)", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
            {lang === "he" ? "EN" : "HE"}
          </button>
          <button onClick={toggleTheme}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg-2)", display: "flex", alignItems: "center", width: 32, height: 32, borderRadius: 8, justifyContent: "center" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-2)")}>
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      )}

      {isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setLang(lang === "he" ? "en" : "he")}
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 8px", color: "var(--fg-2)", fontSize: 11, cursor: "pointer" }}>
            {lang === "he" ? "EN" : "HE"}
          </button>
          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)", display: "flex", padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>)
                : (<><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></>)}
            </svg>
          </button>
        </div>
      )}

      {isMobile && open && (
        <div style={{
          position: "absolute", top: 60, left: 0, right: 0,
          background: "var(--bg)", borderBottom: "1px solid var(--border)",
          padding: "20px 24px", display: "flex", flexDirection: "column",
          direction: lang === "he" ? "rtl" : "ltr",
        }}>
          {nav[lang].map((item, i) => (
            <a key={i} href={hrefs[i]} onClick={() => setOpen(false)}
              style={{
                color: "var(--fg)", fontSize: 20, fontWeight: 600,
                textDecoration: "none", padding: "14px 0",
                borderBottom: i < nav[lang].length - 1 ? "1px solid var(--border)" : "none",
              }}>
              {item}
            </a>
          ))}
          <button onClick={toggleTheme}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg-2)", fontSize: 14, textAlign: "start", padding: "16px 0 4px" }}>
            {theme === "dark" ? (lang === "he" ? "מצב בהיר ☀️" : "Light Mode ☀️") : (lang === "he" ? "מצב כהה 🌙" : "Dark Mode 🌙")}
          </button>
        </div>
      )}
    </nav>
  );
}