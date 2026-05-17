import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const copy = {
  he: {
    tag: "עיצוב · פיתוח · תוצאות",
   prefix: "אנחנו בונים אתרים",
    words: ["מוכרים.", "מצליחים.", "מענינים."],
    cta1: "עבודות נבחרות",
    cta2: "לשוחח על פרויקט",
  },
  en: {
    tag: "Design · Development · Results",
    prefix: "We build websites that ",
    words: ["sell.", "convert.", "grow."],
    cta1: "Selected Works",
    cta2: "Discuss a Project",
  },
};

const PROJECTS = [
  { name: "Urban Wear",   type: "E-Commerce", color: "#6366f1", metric: "+340%",     live: true },
  { name: "FlowCRM",     type: "SaaS",        color: "#10b981", metric: "2.4K users", live: true },
  { name: "Sunset Yoga", type: "Portfolio",   color: "#f59e0b", metric: "+180%",     live: true },
];

function PhoneScreen({ scale: s }: { scale: number }) {
  return (
    <div style={{
      width: 260 * s, background: "#111010",
      borderRadius: 48 * s, border: `${7 * s}px solid #1e1c1b`,
      overflow: "hidden", position: "relative", flexShrink: 0,
    }}>
      <div style={{ position: "absolute", top: 12 * s, left: "50%", transform: "translateX(-50%)", width: 86 * s, height: 22 * s, background: "#111010", borderRadius: 11 * s, zIndex: 10 }} />

      <div style={{ height: 530 * s, paddingTop: 44 * s, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: `${8 * s}px ${16 * s}px ${12 * s}px`, display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0, direction: "ltr" }}>
          <span style={{ color: "#ece8e2", fontSize: 13 * s, fontWeight: 800 }}>rynox.</span>
          <div style={{ width: 26 * s, height: 26 * s, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10 * s, height: 1.5 * s, background: "rgba(255,255,255,0.4)", borderRadius: 99 }} />
          </div>
        </div>

        <div style={{ margin: `0 ${10 * s}px ${10 * s}px`, padding: `${14 * s}px ${16 * s}px`, background: "linear-gradient(135deg,#1a1060,#0d0b20)", borderRadius: 16 * s, position: "relative", overflow: "hidden", flexShrink: 0, direction: "ltr" }}>
          <div style={{ position: "absolute", top: -20 * s, right: -20 * s, width: 100 * s, height: 100 * s, background: "rgba(99,102,241,0.2)", filter: `blur(${30 * s}px)`, borderRadius: "50%" }} />
          <p style={{ color: "rgba(255, 255, 255, 1)", fontSize: 7 * s, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 * s }}>ACTIVE PROJECTS</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6 * s }}>
            <span style={{ color: "#ece8e2", fontSize: 32 * s, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>35</span>
            <span style={{ color: "rgba(199,196,255,0.5)", fontSize: 10 * s, marginBottom: 3 * s }}>projects</span>
          </div>
          <div style={{ display: "flex", gap: 16 * s, marginTop: 10 * s }}>
            {[["98%", "satisfaction"], ["4.8★", "rating"]].map(([v, l]) => (
              <div key={l}>
                <p style={{ color: "#ece8e2", fontSize: 12 * s, fontWeight: 700 }}>{v}</p>
                <p style={{ color: "rgba(199,196,255,0.4)", fontSize: 7 * s, marginTop: 1 * s }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: 7 * s, letterSpacing: "0.2em", textTransform: "uppercase", padding: `0 ${14 * s}px ${8 * s}px`, flexShrink: 0, direction: "ltr" }}>Recent work</p>

        <div style={{ padding: `0 ${10 * s}px`, flex: 1, display: "flex", flexDirection: "column", gap: 6 * s }}>
          {PROJECTS.map(({ name, type, color, metric, live }) => (
            <div key={name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 * s, padding: `${10 * s}px ${12 * s}px`, display: "flex", alignItems: "center", gap: 10 * s, direction: "ltr" }}>
              <div style={{ width: 32 * s, height: 32 * s, borderRadius: 9 * s, background: color + "20", border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: 16 * s, height: 11 * s, borderRadius: 2 * s, background: color + "90" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: "#ece8e2", fontSize: 10 * s, fontWeight: 600, marginBottom: 2 * s }}>{name}</p>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 8 * s }}>{type}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 * s, flexShrink: 0 }}>
                <span style={{ color: "#86efac", fontSize: 9 * s, fontWeight: 700 }}>{metric}</span>
                {live && (
                  <span style={{ display: "flex", alignItems: "center", gap: 3 * s, color: "#86efac", fontSize: 6.5 * s }}>
                    <span style={{ width: 4 * s, height: 4 * s, borderRadius: "50%", background: "#86efac", display: "inline-block" }} />
                    LIVE
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", padding: `${10 * s}px ${16 * s}px ${18 * s}px`, borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          {["⊞", "◎", "♡", "⊙"].map((icon, i) => (
            <div key={i} style={{ width: 28 * s, height: 28 * s, borderRadius: 8 * s, background: i === 0 ? "rgba(255,255,255,0.1)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: i === 0 ? "#ece8e2" : "rgba(255,255,255,0.25)", fontSize: 13 * s }}>{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WordCycle({ prefix, words, lang, wordIdx }: { prefix: string; words: string[]; lang: string; wordIdx: number }) {
  return (
    <h1 style={{
      fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.04em", color: "var(--fg)",
    }}>
      {prefix}
      <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${lang}-${wordIdx}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "inline-block" }}
          >
            {words[wordIdx]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}

export default function Hero() {
  const { lang } = useTheme();
  const isMobile = useIsMobile();
  const t = copy[lang];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => { setWordIdx(0); }, [lang]);
  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % t.words.length), 2200);
    return () => clearInterval(id);
  }, [t.words.length]);
const sub = lang === "he" ? (
  <>הופכים <span className="highlight">עסקים מקומיים</span> לברנדים דיגיטליים שמביאים תוצאות.</>
) : (
  <>Turning <span className="highlight">local businesses</span> into digital brands that deliver results.</>
);
  if (isMobile) {
    return (

      <section>
        {/* Mobile: centered text + phone below */}
        <motion.div
          initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          style={{ marginTop: 52, background: "var(--bg-2)", display: "flex", justifyContent: "center", alignItems: "flex-end", padding: "15px 0 15px", overflow: "hidden", position: "relative" }}
        >
          <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 240, height: 240, background: "#6366f1", opacity: 0.06, filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none" }} />
          <PhoneScreen scale={0.74} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}
          style={{ textAlign: "center", padding: "26px 24px 12px", maxWidth: 600, margin: "0 auto" }}
        >
          <div style={{ fontSize: "clamp(40px, 11vw, 56px)", marginBottom: 20 }}>
            <WordCycle prefix={t.prefix} words={t.words} lang={lang} wordIdx={wordIdx} />
          </div>
          <p style={{ fontSize: 15, color: "var(--fg-2)", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 36px" }}>{sub}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <a href="#portfolio" style={{ padding: "13px 24px", borderRadius: 100, border: "1.5px solid var(--fg)", color: "var(--fg)", fontSize: 14, fontWeight: 600, textDecoration: "none", background: "transparent", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>{t.cta1}</a>
            <a href="#contact" style={{ padding: "13px 24px", borderRadius: 100, background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>{t.cta2}</a>
          </div>
        </motion.div>

        
      </section>
    );
  }

  return (
    <section style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
      {/* Desktop: phone LEFT, text RIGHT (Hebrew RTL) */}
      <div style={{
        display: "flex",
        flexDirection: lang === "he" ? "row" : "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
        padding: "0 64px",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}
          style={{ flexShrink: 0, position: "relative" }}
        >
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 280, height: 280, background: "#6366f1", opacity: 0.07, filter: "blur(90px)", borderRadius: "50%", pointerEvents: "none" }} />
          <PhoneScreen scale={1} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}
          style={{ textAlign: lang === "he" ? "right" : "left", maxWidth: 500 }}
        >
          <p style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 28 }}>{t.tag}</p>
          <div style={{ fontSize: "clamp(52px, 4.8vw, 72px)", marginBottom: 22 }}>
            <WordCycle prefix={t.prefix} words={t.words} lang={lang} wordIdx={wordIdx} />
          </div>
          <p style={{ fontSize: 17, color: "var(--fg-2)", lineHeight: 1.72, maxWidth: 420, marginBottom: 40 }}>{sub}</p>
          <div style={{ display: "flex", gap: 10, justifyContent: lang === "he" ? "flex-end" : "flex-start" }}>
            <a href="#portfolio" style={{ padding: "14px 28px", borderRadius: 100, border: "1.5px solid var(--fg)", color: "var(--fg)", fontSize: 14, fontWeight: 600, textDecoration: "none", background: "transparent", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>{t.cta1}</a>
            <a href="#contact" style={{ padding: "14px 28px", borderRadius: 100, background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>{t.cta2}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
