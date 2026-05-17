import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const c = {
  he: {
    title: ["מוכן להתחיל?", "בוא נבנה משהו שיגרום ללקוחות שלך לגיד וואו."],
    btn: "שלח הודעה",
    sub: "תגובה תוך 24 שעות · ללא התחייבות",
  },
  en: {
    title: ["Ready to start?", "Let's build something that makes your clients say wow."],
    btn: "Send a Message",
    sub: "Response within 24 hours · No commitment",
  },
};

export default function CTA() {
  const { lang } = useTheme();
  const isMobile = useIsMobile();
  const t = c[lang];

  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}
      style={{ padding: isMobile ? "80px 20px 60px" : "120px 48px 80px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>
          {lang === "he" ? "צור קשר" : "Contact"}
        </p>
        <h2 style={{ color: "var(--fg)", fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 20 }}>
          {t.title[0]}<br />
          <span style={{ color: "var(--fg-2)", fontWeight: 700 }}>{t.title[1]}</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "stretch" : "center", gap: 16, marginTop: 44 }}>
          <a href="mailto:hello@rynox.dev" style={{ display: "block", background: "var(--fg)", color: "var(--bg)", padding: isMobile ? "18px 24px" : "16px 44px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", textAlign: "center" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            {t.btn}
          </a>
          <p style={{ color: "var(--fg-3)", fontSize: 13 }}>{t.sub}</p>
        </div>
      </div>
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1100, margin: "80px auto 0", flexWrap: "wrap", gap: 16 }}>
        <span style={{ color: "var(--fg)", fontWeight: 700, fontSize: 16, letterSpacing: "0.08em" }}>RYNOX</span>
        <span style={{ color: "var(--fg-3)", fontSize: 13 }}>© 2025 Rynox. {lang === "he" ? "כל הזכויות שמורות." : "All rights reserved."}</span>
      </div>
    </motion.section>
  );
}   