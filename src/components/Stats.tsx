import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
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
    const dur = 1600;
    const t0 = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, to]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

const s = {
  he: [
    { to: 35, suffix: "+", label: "פרויקטים" },
    { to: 98, suffix: "%", label: "שביעות רצון" },
    { to: 4.8, decimals: 1, suffix: "★", label: "דירוג לקוחות" },
  ],
  en: [
    { to: 35, suffix: "+", label: "Projects" },
    { to: 98, suffix: "%", label: "Satisfaction" },
    { to: 4.8, decimals: 1, suffix: "★", label: "Client Rating" },
  ],
};

export default function Stats() {
  const { lang } = useTheme();
  const items = s[lang];

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {items.map((item, i) => (
          <div key={i} style={{ textAlign: "center", padding: "32px 16px", borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}>
            <p style={{ color: "var(--fg)", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>
              <Counter to={item.to} decimals={item.decimals ?? 0} suffix={item.suffix} />
            </p>
            <p style={{ color: "var(--fg-3)", fontSize: 13 }}>{item.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}