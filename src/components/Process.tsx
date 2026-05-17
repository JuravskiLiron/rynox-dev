import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const c = {
  he: {
    tag: "איך זה עובד",
    title: "תהליך פשוט.\nתוצאות מעולות.",
    steps: [
      { n: "01", title: "שיחה", desc: "מבינים את העסק, המטרות וקהל היעד. בונים יחד אסטרטגיה ברורה." },
      { n: "02", title: "עיצוב ופיתוח", desc: "מעצבים ומפתחים חווית משתמש שממירה מבקרים ללקוחות משלמים." },
      { n: "03", title: "השקה ותמיכה", desc: "יוצאים לאוויר, עוקבים אחרי תוצאות ומשפרים כל הזמן." },
    ],
  },
  en: {
    tag: "How It Works",
    title: "Simple process.\nGreat results.",
    steps: [
      { n: "01", title: "Talk", desc: "We understand your business, goals, and audience. We build a clear strategy together." },
      { n: "02", title: "Design & Build", desc: "We design and develop a user experience that turns visitors into paying customers." },
      { n: "03", title: "Launch & Support", desc: "We go live, track results, and keep improving over time." },
    ],
  },
};

export default function Process() {
  const { lang } = useTheme();
  const isMobile = useIsMobile();
  const t = c[lang];

  return (
    <section style={{ padding: isMobile ? "80px 20px" : "120px 48px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: isMobile ? 48 : 72 }}>
          <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>{t.tag}</p>
          <h2 style={{ color: "var(--fg)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", whiteSpace: "pre-line" }}>{t.title}</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)" }}>
          {t.steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={isMobile ? {
                padding: "28px 0",
                borderBottom: i < t.steps.length - 1 ? "1px solid var(--border)" : "none",
              } : {
                padding: "0 40px 0 0",
                borderRight: i < t.steps.length - 1 ? "1px solid var(--border)" : "none",
                marginRight: i < t.steps.length - 1 ? 40 : 0,
              }}>
              <p style={{ color: "var(--fg-3)", fontSize: 13, fontWeight: 500, marginBottom: 16, letterSpacing: "0.05em" }}>{step.n}</p>
              <h3 style={{ color: "var(--fg)", fontSize: isMobile ? 20 : 22, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: "var(--fg-2)", fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}