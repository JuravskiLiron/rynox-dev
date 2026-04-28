import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//
// ✅ Плавная прогрузка цены
//
function useAnimatedPrice(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1400;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      if (progress < duration) {
        const percent = progress / duration;
        setValue(Math.floor(target * percent));
        requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, start]);

  return value;
}

//
// ✅ Типы
//
interface PackageCardProps {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
  startAnimation: boolean;
}

//
// ✅ Карточка БЕЗ появления
//
function PackageCard({
  title,
  price,
  features,
  popular,
  startAnimation,
}: PackageCardProps) {
  const animatedPrice = useAnimatedPrice(price, startAnimation);

  return (
    <div
      className={`relative p-8 rounded-3xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300
        ${
          popular
            ? "bg-purple-900/40 border-purple-500 shadow-xl"
            : "bg-zinc-900/80 border-zinc-800"
        }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-sm rounded-full font-semibold">
          הכי פופולרי
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>

      <motion.p
        animate={
          animatedPrice === price
            ? { scale: [1, 1.06, 1] }
            : { scale: 1 }
        }
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-6"
      >
        ₪{animatedPrice}
      </motion.p>

      <ul className="text-gray-300 mb-6 space-y-2 text-right">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 justify-end">
            {f}
            <span className="text-purple-400 font-bold">✓</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-semibold transition ${
          popular
            ? "bg-purple-600 hover:bg-purple-500"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      >
        הזמן עכשיו
      </button>
    </div>
  );
}

//
// ✅ Главный компонент
//
export default function Packages() {
  const [startAnimation, setStartAnimation] = useState(false);

  const packages = [
    {
      title: "סטארט",
      price: 1500,
      features: ["דף בית", "SEO בסיסי", "תמיכה שבועית"],
    },
    {
      title: "עסקי",
      price: 3500,
      popular: true,
      features: [
        "כולל סטארט",
        "חנות אונליין",
        "SEO מתקדם",
        "תמיכה יומית",
      ],
    },
    {
      title: "פרימיום",
      price: 6500,
      features: [
        "כולל עסקי",
        "אינטגרציות מותאמות אישית",
        "אנימציות מתקדמות",
        "תמיכה 24/7",
      ],
    },
  ];

  return (
    <section id="packages" className="py-32 px-6 text-center bg-black">
      <h2 className="text-4xl font-bold mb-16 text-white">חבילות</h2>

      {/* только для отслеживания viewport */}
      <motion.div
        onViewportEnter={() => setStartAnimation(true)}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            {...pkg}
            startAnimation={startAnimation}
          />
        ))}
      </motion.div>
    </section>
  );
}