import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="py-32 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        לפני ואחרי
      </h2>

      <div className="relative max-w-5xl mx-auto h-[500px] rounded-3xl overflow-hidden">

        {/* AFTER */}
        <img
          src="/after.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="/before.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${position}%` }}
          onMouseDown={(e) => {
            const container = e.currentTarget.parentElement!;
            const move = (event: MouseEvent) => {
              const rect = container.getBoundingClientRect();
              const newPos =
                ((event.clientX - rect.left) / rect.width) * 100;
              setPosition(Math.min(100, Math.max(0, newPos)));
            };

            const up = () => {
              window.removeEventListener("mousemove", move);
              window.removeEventListener("mouseup", up);
            };

            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", up);
          }}
        />

        <div className="absolute top-4 left-4 bg-black/60 px-4 py-2 rounded-xl">
          לפני
        </div>

        <div className="absolute top-4 right-4 bg-black/60 px-4 py-2 rounded-xl">
          אחרי
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-green-400 text-xl font-semibold">
          ↑ 42% Conversion Rate
        </p>
        <p className="text-zinc-400 mt-2">
          עיצוב מחדש + UX אופטימיזציה
        </p>
      </div>
    </section>
  );
}