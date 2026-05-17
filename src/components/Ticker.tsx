const ITEMS = [
  "React", "TypeScript", "Next.js", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Framer Motion", "Figma",
  "Vercel", "Supabase", "React Native", "GraphQL",
];

const track = [...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      overflow: "hidden",
      padding: "12px 0",
      direction: "ltr",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "max-content",
        animation: "marquee 36s linear infinite",
      }}>
        {track.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{
              color: "var(--fg-3)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              padding: "0 22px",
            }}>
              {item}
            </span>
            <span style={{ color: "var(--fg-3)", opacity: 0.3, fontSize: 14 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}