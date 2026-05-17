import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function PriceCounter({ to }: { to: number }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 1200;
    const t0 = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, to]);

  return <span ref={ref}>₪{val.toLocaleString()}</span>;
}

const c = {
  he: {
    tag: "מחירים", title: "בחר חבילה", popular: "הכי פופולרי", cta: "הזמן עכשיו",
    plans: [
      { name: "סטארט", price: 1500, desc: "לעסקים שרוצים נוכחות דיגיטלית מקצועית", features: ["דף בית מעוצב", "SEO בסיסי", "מותאם למובייל", "תמיכה שבועית"] },
      { name: "עסקי", price: 3500, desc: "לעסקים שרוצים לגדול ולמכור יותר", features: ["כולל סטארט", "חנות אונליין", "SEO מתקדם", "אנליטיקס", "תמיכה יומית"], popular: true },
      { name: "פרימיום", price: 6500, desc: "פתרון מקיף לעסקים ברמה הגבוהה ביותר", features: ["כולל עסקי", "אנימציות מתקדמות", "אינטגרציות CRM", "A/B Testing", "תמיכה 24/7"] },
    ],
  },
  en: {
    tag: "Pricing", title: "Choose a Plan", popular: "Most Popular", cta: "Get Started",
    plans: [
      { name: "Starter", price: 1500, desc: "For businesses that want a professional digital presence", features: ["Designed homepage", "Basic SEO", "Mobile optimized", "Weekly support"] },
      { name: "Business", price: 3500, desc: "For businesses that want to grow and sell more", features: ["Includes Starter", "Online store", "Advanced SEO", "Analytics", "Daily support"], popular: true },
      { name: "Premium", price: 6500, desc: "A complete solution for top-tier businesses", features: ["Includes Business", "Advanced animations", "CRM integrations", "A/B Testing", "24/7 support"] },
    ],
  },
};

export default function Packages() {
  const { lang } = useTheme();
  const t = c[lang];

  return (
    <section id="pricing" style={{ padding: "120px 24px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>{t.tag}</p>
          <h2 style={{ color: "var(--fg)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{t.title}</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {t.plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ border: "1px solid var(--border)", borderRadius: 16, padding: "32px", display: "flex", flexDirection: "column", position: "relative", background: (plan as any).popular ? "var(--surface)" : "transparent" }}>
              {(plan as any).popular && (
                <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: "var(--fg)", color: "var(--bg)", fontSize: 11, fontWeight: 600, padding: "4px 14px", borderRadius: "0 0 8px 8px", letterSpacing: "0.05em" }}>
                  {t.popular}
                </div>
              )}
              <p style={{ color: "var(--fg-3)", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{plan.name}</p>
              <p style={{ color: "var(--fg)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
                <PriceCounter to={plan.price} />
              </p>
              <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.5, marginBottom: 28, borderBottom: "1px solid var(--border)", paddingBottom: 24 }}>{plan.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg-2)", fontSize: 14 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fg-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{ width: "100%", padding: "12px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", background: (plan as any).popular ? "var(--fg)" : "transparent", color: (plan as any).popular ? "var(--bg)" : "var(--fg)", border: "1px solid var(--border)" }}
                onMouseEnter={e => { if (!(plan as any).popular) e.currentTarget.style.background = "var(--surface)"; }}
                onMouseLeave={e => { if (!(plan as any).popular) e.currentTarget.style.background = "transparent"; }}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}