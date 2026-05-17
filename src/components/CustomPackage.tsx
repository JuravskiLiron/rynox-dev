import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useIsMobile } from "../hooks/useIsMobile";

const services = {
  he: [
    { icon: "⚙️", name: "פאנל אדמין", desc: "ניהול תוכן מלא לאתר קיים", price: 300 },
    { icon: "🚀", name: "דף נחיתה", desc: "עמוד ממיר עם אנימציות", price: 800 },
    { icon: "🎨", name: "לוגו + ברנד", desc: "זהות ויזואלית מלאה", price: 450 },
    { icon: "🛒", name: "חנות אינטרנטית", desc: "קטלוג + עגלת קניות", price: 1200 },
    { icon: "📧", name: "אוטומציית מיילים", desc: "תהליכי אוטומציה חכמים", price: 400 },
    { icon: "📊", name: "אופטימיזציית SEO", desc: "שיפור דירוג בגוגל", price: 500 },
  ],
  en: [
    { icon: "⚙️", name: "Admin Panel", desc: "Full CMS for existing site", price: 300 },
    { icon: "🚀", name: "Landing Page", desc: "Converting page with animations", price: 800 },
    { icon: "🎨", name: "Logo + Brand", desc: "Complete visual identity", price: 450 },
    { icon: "🛒", name: "Online Store", desc: "Catalog + shopping cart", price: 1200 },
    { icon: "📧", name: "Email Automation", desc: "Smart automation workflows", price: 400 },
    { icon: "📊", name: "SEO Optimization", desc: "Google ranking improvement", price: 500 },
  ],
};

export default function CustomPackage() {
  const { lang } = useTheme();
  const isMobile = useIsMobile();
  const items = services[lang];

  return (
    <section style={{
      padding: isMobile ? "80px 20px" : "120px 48px",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: isMobile ? 48 : 64 }}
        >
          <p style={{ color: "var(--fg-3)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>
            {lang === "he" ? "הזמנות ספציפיות" : "À La Carte"}
          </p>
          <h2 style={{
            color: "var(--fg)",
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(36px, 3.5vw, 52px)",
            fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 520,
          }}>
            {lang === "he"
              ? <span>צריך רק משהו ספציפי?<br /><span style={{ color: "var(--fg-2)", fontWeight: 700 }}>אפשר להזמין בדיוק מה שצריך.</span></span>
              : <span>Need just one thing?<br /><span style={{ color: "var(--fg-2)", fontWeight: 700 }}>Order exactly what you need.</span></span>
            }
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 12 : 16,
        }}>
          {items.map((item, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                display: "flex", flexDirection: "column",
                padding: isMobile ? "20px 16px" : "28px 24px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: isMobile ? 16 : 20,
                textDecoration: "none", cursor: "pointer",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--fg-3)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface-hover)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <span style={{ fontSize: isMobile ? 22 : 28, marginBottom: isMobile ? 10 : 14, display: "block" }}>
                {item.icon}
              </span>
              <p style={{ color: "var(--fg)", fontSize: isMobile ? 13 : 15, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>
                {item.name}
              </p>
              <p style={{ color: "var(--fg-3)", fontSize: isMobile ? 11 : 12, lineHeight: 1.5, flex: 1, marginBottom: isMobile ? 16 : 20 }}>
                {item.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "var(--fg)", fontSize: isMobile ? 20 : 24, fontWeight: 800, letterSpacing: "-0.02em" }}>
                  ₪{item.price.toLocaleString()}
                </span>
                <span style={{ color: "var(--fg-3)", fontSize: isMobile ? 11 : 12, fontWeight: 500 }}>
                  {lang === "he" ? "הזמן ←" : "Order →"}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ color: "var(--fg-3)", fontSize: 13, textAlign: "center", marginTop: 40, lineHeight: 1.6 }}
        >
          {lang === "he"
            ? "כל השירותים כוללים עיצוב + פיתוח + העלאה לאוויר · מחירים ללא מע\"מ"
            : "All services include design + development + deployment · Prices excl. VAT"}
        </motion.p>
      </div>
    </section>
  );
}