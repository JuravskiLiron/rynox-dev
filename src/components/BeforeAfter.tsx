import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const c = {
  he: {
    tag: "הוכחה",
    title: "לפני ואחרי",
    sub: "גרור את המחוון לראות את ההבדל",
    before: "לפני",
    after: "אחרי",
    gain: "+720% המרות",
    gainSub: "מסעדה איטלקית — אחרי בנייה מחדש",
  },
  en: {
    tag: "Proof",
    title: "Before & After",
    sub: "Drag the handle to see the difference",
    before: "Before",
    after: "After",
    gain: "+720% Conversions",
    gainSub: "Italian restaurant — after full rebuild",
  },
};

function OldSite() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#eeebe4", fontFamily: "Georgia, serif", overflow: "hidden" }}>
      <div style={{ background: "#1a3566", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <span style={{ color: "#fbbf24", fontSize: 12, fontWeight: "bold" }}>MY WEBSITE</span>
        <div style={{ display: "flex", gap: 14 }}>
          {["בית", "אודות", "שירותים", "צור קשר"].map(t => (
            <span key={t} style={{ color: "white", fontSize: 10 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "#c9c4bc", flexShrink: 0, height: "44%", borderBottom: "4px solid #1a3566", position: "relative" }}>
        <div style={{ position: "absolute", top: 12, right: 16, background: "#1a3566", color: "white", fontSize: 9, padding: "4px 10px", border: "2px outset #8888bb" }}>
          לחץ כאן ←
        </div>
        <div style={{ position: "absolute", bottom: 12, left: 16, background: "white", border: "1px solid #ccc", padding: "3px 7px", fontSize: 8, color: "#666" }}>
          מבקרים: 00842
        </div>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "white" }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i} style={{ borderLeft: i > 0 ? "1px solid #ddd" : "none", padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1a3566" }} />
            <div style={{ width: "70%", height: 6, background: "#ddd", borderRadius: 2 }} />
            <div style={{ width: "50%", height: 5, background: "#e8e8e8", borderRadius: 2 }} />
          </div>
        ))}
      </div>
      <div style={{ background: "#1a3566", padding: "5px", textAlign: "center", fontSize: 8, color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>
        © 2010 כל הזכויות שמורות | Wix
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0a0908", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: -40, right: -40, width: 280, height: 280, borderRadius: "50%", background: "rgba(242,239,233,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0, position: "relative" }}>
        <span style={{ color: "#f2efe9", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}>RYNOX</span>
        <div style={{ display: "flex", gap: 18 }}>
          {["בית", "שירותים", "צור קשר"].map(t => (
            <span key={t} style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", padding: "0 28px", position: "relative" }}>
        <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "3px 10px", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em" }}>
          RYNOX STUDIO
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "14px 18px", width: 150 }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, letterSpacing: "0.12em", marginBottom: 5 }}>קצב המרה</div>
          <div style={{ color: "#f2efe9", fontSize: 26, fontWeight: 800, lineHeight: 1 }}>8.7%</div>
          <div style={{ color: "rgba(134,239,172,0.9)", fontSize: 10, marginTop: 4, fontWeight: 600 }}>↑ +720%</div>
        </div>
        <div style={{ marginTop: 12, background: "#f2efe9", borderRadius: 999, padding: "7px 20px", fontSize: 11, color: "#0a0908", fontWeight: 600 }}>
          בוא נתחיל
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: "0 14px 14px", flexShrink: 0, position: "relative" }}>
        {[["⚡", "מהירות"], ["✦", "עיצוב"], ["↑", "תוצאות"]].map(([icon, label]) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "9px 11px", display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{icon}</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(93, Math.max(7, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    const move = (ev: MouseEvent) => update(ev.clientX);
    const up = () => { setDragging(false); window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  }, [update]);

  const onTouchStart = useCallback(() => {
    setDragging(true);
    const move = (ev: TouchEvent) => update(ev.touches[0].clientX);
    const end = () => { setDragging(false); window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
  }, [update]);

  return (
    <div ref={ref} style={{ position: "relative", height: 480, borderRadius: 20, overflow: "hidden", cursor: "ew-resize", userSelect: "none", border: "1px solid var(--border)" }}
      onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
      <div style={{ position: "absolute", inset: 0 }}><NewSite /></div>
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}><OldSite /></div>
      <div style={{ position: "absolute", top: 0, bottom: 0, width: 1, left: `${pos}%`, background: "var(--fg)", opacity: 0.3, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: `${pos}%`, transform: `translate(-50%, -50%) scale(${dragging ? 1.1 : 1})`, transition: "transform 0.1s", pointerEvents: "none", zIndex: 20 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,7 4,12 9,17" /><polyline points="15,7 20,12 15,17" />
            <line x1="12" y1="5" x2="12" y2="19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { lang } = useTheme();
  const t = c[lang];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      style={{ padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>{t.tag}</p>
          <h2 style={{ color: "var(--fg)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>{t.title}</h2>
          <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{t.sub}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>{t.before}</span>
          <span style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>{t.after}</span>
        </div>

        <Slider />

        <div style={{ marginTop: 24, display: "flex", alignItems: "baseline", gap: 12 }}>
          <span style={{ color: "var(--fg)", fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.gain}</span>
          <span style={{ color: "var(--fg-2)", fontSize: 14 }}>{t.gainSub}</span>
        </div>
      </div>
    </motion.section>
  );
}