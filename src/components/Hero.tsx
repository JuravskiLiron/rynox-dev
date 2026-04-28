import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["מובנים", "נוחים", "מוכרים", "מהירים", "יצירתיים", "מקצועיים", "בטוחים"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Циклично меняем слово каждые 2.5 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">

      {/* Animated gradient blobs */}
      <div className="absolute w-[700px] h-[700px] bg-purple-600/40 blur-[200px] rounded-full animate-[blob1_15s_1s_infinite] -top-40 -left-40"/>
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/30 blur-[180px] rounded-full animate-[blob2_20s_0s_infinite] -bottom-20 -right-20"/>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold leading-tight text-white"
      >
        אני בונה אתרים<br />
        
        <span className="text-purple-500 relative inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 max-w-xl text-lg"
      >
        עיצוב מודרני, ביצועים גבוהים ותוצאה שמביאה לקוחות.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-10 px-12 py-4 bg-purple-600 hover:bg-purple-500 rounded-3xl font-semibold shadow-lg shadow-purple-600/40 transition"
      >
        בוא נתחיל
      </motion.button>
    </section>
  );
}