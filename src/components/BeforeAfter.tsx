import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  type: "restaurant" | "store" | "law";
  metric: string;
  metricLabel: string;
  note: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "מסעדה איטלקית",
    type: "restaurant",
    metric: "+85%",
    metricLabel: "הזמנות אונליין",
    note: "עיצוב מחדש + מערכת הזמנות",
    url: "bellaroma.co.il",
  },
  {
    id: 2,
    title: "חנות אופנה",
    type: "store",
    metric: "+120%",
    metricLabel: "תנועה אורגנית",
    note: "SEO מתקדם + חנות אונליין חדשה",
    url: "fashion-store.co.il",
  },
  {
    id: 3,
    title: "משרד עורכי דין",
    type: "law",
    metric: "+60%",
    metricLabel: "המרות לקוחות",
    note: "אתר חדש + אופטימיזציית UX",
    url: "law-office.co.il",
  },
];

function BeforeScreen({ type }: { type: Project["type"] }) {
  const name =
    type === "restaurant" ? "BELLA ROMA" : type === "store" ? "FASHION SHOP" : "LAW OFFICE LTD";

  const hero =
    type === "restaurant"
      ? "ברוכים הבאים למסעדה שלנו!"
      : type === "store"
      ? "ברוכים הבאים לחנות"
      : "משרד עורכי דין מקצועי";

  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden select-none"
      style={{ background: "#e8e8e8", fontFamily: "serif" }}
      dir="rtl"
    >
      <div className="bg-[#003366] px-3 py-2 flex justify-between items-center shrink-0">
        <div className="flex gap-2">
          {["בית", "אודות", "שירותים", "צור קשר"].map((item) => (
            <span key={item} className="text-white text-[8px]">{item}</span>
          ))}
        </div>
        <span className="text-yellow-300 text-[10px] font-bold">{name}</span>
      </div>

      <div className="bg-[#f0f0ea] border-b-4 border-[#003366] p-3 text-center shrink-0">
        <p className="text-[12px] font-bold text-[#003366]">{hero}</p>
        <p className="text-[8px] text-gray-600 mt-0.5">אנחנו כאן לשרת אתכם בכל עת!</p>
        <button className="mt-1.5 px-3 py-0.5 bg-[#003366] text-white text-[8px] border-2 border-gray-400 rounded-none">
          לחץ כאן לפרטים נוספים ←
        </button>
      </div>

      <div className="p-2 flex-1 overflow-hidden">
        <div className="grid grid-cols-2 gap-1.5 h-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border border-gray-400 p-1.5 flex flex-col">
              <div className="bg-gray-300 h-8 mb-1 shrink-0" />
              <div className="text-[7px] text-gray-800 font-bold">פריט מספר {i}</div>
              <div className="text-[7px] text-blue-800 underline mt-0.5">לפרטים נוספים לחץ כאן</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#003366] px-2 py-1 text-[6px] text-white/60 text-center shrink-0">
        © 2009 כל הזכויות שמורות | נבנה עם Wix
      </div>
    </div>
  );
}

function AfterScreen({ type }: { type: Project["type"] }) {
  const name =
    type === "restaurant" ? "BELLA ROMA" : type === "store" ? "FASHION" : "LAW FIRM";

  const tag =
    type === "restaurant" ? "Fine Dining" : type === "store" ? "New Collection" : "Legal Excellence";

  const headline =
    type === "restaurant"
      ? ["חוויה קולינרית", "שלא תשכחו"]
      : type === "store"
      ? ["סטייל שמגדיר", "את העתיד"]
      : ["הגנה משפטית", "מקצועית"];

  const cta = type === "law" ? "ייעוץ חינם" : "הזמן עכשיו";

  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden select-none bg-[#07070f]"
      dir="rtl"
    >
      <div className="px-4 py-2.5 flex justify-between items-center border-b border-white/10 shrink-0">
        <div className="flex gap-3">
          {["בית", "שירותים", "צור קשר"].map((item) => (
            <span key={item} className="text-white/40 text-[9px]">{item}</span>
          ))}
        </div>
        <span className="text-white text-[10px] font-bold tracking-widest">{name}</span>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/20" />
        <div className="absolute w-48 h-48 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="text-[9px] text-purple-400 tracking-widest mb-2 uppercase">{tag}</div>
          <p className="text-white text-[13px] font-bold leading-snug mb-3">
            {headline[0]}<br />{headline[1]}
          </p>
          <button className="px-4 py-1.5 bg-purple-600 text-white text-[9px] rounded-full font-semibold tracking-wide shadow-lg shadow-purple-600/30">
            {cta}
          </button>
        </div>
      </div>

      <div className="px-3 pb-3 grid grid-cols-3 gap-1.5 shrink-0">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-2">
            <div className="w-4 h-4 rounded-lg bg-purple-600/60 mb-1.5" />
            <div className="text-[7px] text-white/50">שירות {i}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectSlider({ project }: { project: Project }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampedUpdate = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(94, Math.max(6, pct)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const move = (ev: MouseEvent) => clampedUpdate(ev.clientX);
    const up = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  }, [clampedUpdate]);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
    const move = (ev: TouchEvent) => clampedUpdate(ev.touches[0].clientX);
    const end = () => {
      setIsDragging(false);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
  }, [clampedUpdate]);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="bg-zinc-800 px-3 py-2 flex items-center gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-zinc-700 rounded-md px-3 py-0.5 text-[10px] text-white/30 text-center truncate">
          {project.url}
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative h-[300px] overflow-hidden cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0">
          <AfterScreen type={project.type} />
        </div>

        <div
          className="absolute inset-0 transition-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <BeforeScreen type={project.type} />
        </div>

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white/80 pointer-events-none select-none">
          אחרי
        </div>
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white/80 pointer-events-none select-none">
          לפני
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-white/60 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className={`w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-100 ${isDragging ? "scale-110" : "scale-100"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polyline points="9,7 4,12 9,17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="15,7 20,12 15,17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="5" x2="12" y2="19" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-black text-white px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">לפני ואחרי</h2>
        <p className="text-center text-zinc-500 mb-12 text-sm">
          גרור את המחוון לראות את הטרנספורמציה
        </p>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                i === activeIndex
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectSlider project={projects[activeIndex]} />

            <div className="mt-8 text-center">
              <p className="text-green-400 text-3xl font-extrabold">
                {projects[activeIndex].metric}{" "}
                <span className="text-white text-xl font-semibold">
                  {projects[activeIndex].metricLabel}
                </span>
              </p>
              <p className="text-zinc-500 mt-2 text-sm">{projects[activeIndex].note}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}