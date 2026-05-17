import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Cursor() {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  if (isMobile) return null;

  return <div className="cursor" style={{ left: pos.x, top: pos.y }} />;
}