import { useState } from "react";
import { motion } from "framer-motion";

interface Feature {
  id: string;
  name: string;
  price: number;
}

const features: Feature[] = [
  { id: "homepage", name: "דף בית + עיצוב בסיסי", price: 500 },
  { id: "seo-basic", name: "SEO בסיסי", price: 300 },
  { id: "seo-adv", name: "SEO מתקדם", price: 700 },
  { id: "shop", name: "חנות אונליין", price: 1500 },
  { id: "ui-ux", name: "אנימציות UI/UX מתקדמות", price: 1000 },
  { id: "custom-integration", name: "אינטגרציות מותאמות אישית", price: 1200 },
  { id: "support-daily", name: "תמיכה יומית", price: 400 },
  { id: "support-24", name: "תמיכה 24/7", price: 700 },
];

export default function CustomPackage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const totalPrice = Array.from(selected).reduce((sum, id) => {
    const feature = features.find((f) => f.id === id);
    return feature ? sum + feature.price : sum;
  }, 0);

  return (
    <section className="py-32 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">בנה את החבילה שלך</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {features.map((f) => (
          <motion.div
            key={f.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => toggle(f.id)}
            className={`p-6 rounded-3xl border transition cursor-pointer backdrop-blur-md ${
              selected.has(f.id)
                ? "bg-purple-600/40 border-purple-500 shadow-lg"
                : "bg-zinc-900/70 border-zinc-800"
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">{f.name}</h3>
            <p className="text-purple-500 font-bold">₪{f.price}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-md mx-auto bg-zinc-900/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-zinc-800 text-center">
        <p className="text-gray-300 mb-4">סה"כ מחיר: <span className="text-purple-500 font-bold text-2xl">₪{totalPrice}</span></p>
        <button className="py-4 px-8 bg-purple-600 hover:bg-purple-500 rounded-2xl font-semibold text-white transition">
          שלח בקשה עם החבילה שלך
        </button>
      </div>
    </section>
  );
}