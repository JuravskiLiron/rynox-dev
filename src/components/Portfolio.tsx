import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const copy = {
  he: { tag: "עבודות", title: "פרויקטים נבחרים" },
  en: { tag: "Work", title: "Selected Projects" },
};

const projects = [
  {
    title: "Bella Cucina",
    category: { he: "מסעדה · אתר תדמית", en: "Restaurant · Branding" },
    year: "2024",
    results: { he: ["+720% המרות", "+58% הזמנות", "−34% נטישה"], en: ["+720% Conversions", "+58% Bookings", "−34% Bounce"] },
    preview: "restaurant",
  },
  {
    title: "Urban Wear",
    category: { he: "אופנה · חנות אונליין", en: "Fashion · E-commerce" },
    year: "2024",
    results: { he: ["+42% המרות", "+2.1x מכירות"], en: ["+42% Conversion", "+2.1x Sales"] },
    preview: "shop",
  },
  {
    title: "FlowCRM",
    category: { he: "SaaS · Landing Page", en: "SaaS · Landing Page" },
    year: "2023",
    results: { he: ["+3.4x הרשמות", "−27% CPL"], en: ["+3.4x Signups", "−27% CPL"] },
    preview: "saas",
  },
];

function Preview({ type, hovered }: { type: string; hovered: boolean }) {
  if (type === "restaurant") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#0d0b0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,180,60,0.07)", filter: "blur(60px)" }} />
        <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ color: "#f2efe9", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em" }}>BELLA</span>
          <div style={{ display: "flex", gap: 14 }}>
            {["Menu", "About", "Book"].map(t => <span key={t} style={{ color: "rgba(255,255,255,0.25)", fontSize: 9 }}>{t}</span>)}
          </div>
        </div>
        <div style={{ padding: "22px 22px 16px" }}>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Fine Dining · Tel Aviv</p>
          <p style={{ color: "#f2efe9", fontSize: 22, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 14 }}>
            An Unforgettable<br />Culinary Experience
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#f2efe9", borderRadius: 20, padding: "6px 16px" }}>
              <span style={{ color: "#0d0b0a", fontSize: 9, fontWeight: 700 }}>Reserve a Table</span>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "6px 14px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9 }}>Our Menu</span>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "0 14px" }}>
          {[70, 70, 70].map((h, i) => (
            <div key={i} style={{ height: h, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", transform: hovered ? "translateY(-3px)" : "none", transition: `transform 0.4s ${i * 0.06}s` }} />
          ))}
        </div>
      </div>
    );
  }
  if (type === "shop") {
    return (
      <div style={{ width: "100%", height: "100%", background: "var(--bg-2)", padding: "14px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--fg)", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em" }}>URBAN</span>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, flex: 1 }}>
          {[85, 68, 75, 60].map((h, i) => (
            <div key={i} style={{ borderRadius: 10, background: "var(--border)", height: h, position: "relative", overflow: "hidden", transform: hovered ? "scale(1.02)" : "scale(1)", transition: `transform 0.4s ${i * 0.05}s` }}>
              <div style={{ position: "absolute", bottom: 6, left: 6, right: 6, background: "var(--bg)", borderRadius: 6, padding: "4px 6px" }}>
                <div style={{ height: 4, width: "70%", background: "var(--border)", borderRadius: 3, marginBottom: 3 }} />
                <div style={{ height: 4, width: "45%", background: "var(--border)", borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--fg)", borderRadius: 10, padding: "9px", textAlign: "center" }}>
          <span style={{ color: "var(--bg)", fontSize: 10, fontWeight: 700 }}>Shop Now</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg-2)", padding: "14px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
        <div style={{ width: 20, height: 20, borderRadius: 5, background: "var(--fg)" }} />
        <span style={{ color: "var(--fg)", fontWeight: 700, fontSize: 11 }}>FlowCRM</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px" }}>
          <div style={{ height: 5, width: "80%", background: "var(--border)", borderRadius: 3, marginBottom: 6 }} />
          <div style={{ display: "flex", gap: 5 }}>
            {[40, 55, 32, 48].map((w, i) => (
              <div key={i} style={{ height: 22, width: w, borderRadius: 5, background: "var(--border)" }} />
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {["3.4x", "−27%"].map((n, i) => (
            <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 11px", transform: hovered ? "translateY(-2px)" : "none", transition: `transform 0.3s ${i * 0.08}s` }}>
              <p style={{ color: "var(--fg)", fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>{n}</p>
              <div style={{ height: 4, width: "55%", background: "var(--border)", borderRadius: 3, marginTop: 5 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ project, index, lang, featured }: { project: typeof projects[0]; index: number; lang: "he" | "en"; featured: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", cursor: "pointer", background: hovered ? "var(--surface)" : "transparent", transition: "background 0.3s", display: "flex", flexDirection: "column" }}
    >
      <div style={{ height: featured ? 260 : 200, overflow: "hidden", flexShrink: 0, position: "relative" }}>
        <Preview type={project.preview} hovered={hovered} />
        <div style={{ position: "absolute", inset: 0, background: "var(--fg)", opacity: hovered ? 0.04 : 0, transition: "opacity 0.3s" }} />
      </div>
      <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ color: "var(--fg-3)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 3 }}>{project.category[lang]}</p>
            <h3 style={{ color: "var(--fg)", fontSize: featured ? 19 : 16, fontWeight: 700, letterSpacing: "-0.01em" }}>{project.title}</h3>
          </div>
          <span style={{ color: "var(--fg-3)", fontSize: 12, flexShrink: 0 }}>{project.year}</span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", opacity: featured || hovered ? 1 : 0, transform: featured || hovered ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.3s, transform 0.3s" }}>
          {project.results[lang].map((r, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-2)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, padding: "3px 10px" }}>{r}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { lang } = useTheme();
  const isMobile = useIsMobile();
  const t = copy[lang];

  return (
    <section id="portfolio" style={{ padding: isMobile ? "80px 20px" : "120px 48px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 44 }}>
          <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 14 }}>{t.tag}</p>
          <h2 style={{ color: "var(--fg)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{t.title}</h2>
        </motion.div>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {projects.map((p, i) => <Card key={i} project={p} index={i} lang={lang} featured={false} />)}
          </div>
        ) : (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginBottom: 14 }}>
              <Card project={projects[0]} index={0} lang={lang} featured={true} />
              <Card project={projects[1]} index={1} lang={lang} featured={false} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 14 }}>
              <Card project={projects[2]} index={2} lang={lang} featured={false} />
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.24 }}
                style={{ border: "1px solid var(--border)", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48, gap: 16, textAlign: "center" }}>
                <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {lang === "he" ? "רוצה לראות עוד?" : "Want to see more?"}
                </p>
                <p style={{ color: "var(--fg)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", maxWidth: 280 }}>
                  {lang === "he" ? "יש לנו עוד הרבה עבודות מאחורי הקלעים" : "We have plenty more work behind the scenes"}
                </p>
                <a href="#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "13px 28px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  {lang === "he" ? "דבר איתנו" : "Get in Touch"}
                </a>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}