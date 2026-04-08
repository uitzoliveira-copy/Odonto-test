import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  // High-resolution "AI-perfected" smile image
  const imageUrl = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=95";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-premium-gold font-sans font-bold mb-4 block"
          >
            Tecnologia e Estética de Alta Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-premium-black mb-6"
          >
            Transformação <span className="italic italic-small">Digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-xl mx-auto font-sans font-light text-sm leading-relaxed"
          >
            Utilizamos planejamento digital avançado para criar o sorriso perfeito. Arraste para ver a simulação do resultado final.
          </motion.p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-2xl mx-auto aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] cursor-ew-resize select-none group touch-none bg-premium-offwhite border-8 border-white"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {/* After Image (Base) - AI Perfected Smile */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={imageUrl}
              alt="Depois - Sorriso Perfeito"
              className="w-full h-full object-cover object-center brightness-[1.08] saturate-[0.95] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 right-8 glass px-6 py-2.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-premium-gold z-10 backdrop-blur-md border border-white/20 shadow-lg">
              Resultado Final
            </div>
          </div>

          {/* Before Image (Overlay) - Realistic "Before" state with yellowish tint and lower brightness */}
          <div 
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img
              src={imageUrl}
              alt="Antes - Estado Inicial"
              className="w-full h-full object-cover object-center sepia-[0.55] brightness-[0.82] saturate-[1.3] contrast-[1.08] blur-[0.3px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 glass px-6 py-2.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-gray-500 z-10 backdrop-blur-md border border-white/20 shadow-lg">
              Estado Inicial
            </div>
          </div>

          {/* Minimalist Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-premium-gold/10 backdrop-blur-sm">
                <MoveHorizontal size={16} className="text-premium-gold" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-[9px] uppercase tracking-[0.5em] font-sans font-bold text-gray-300"
          >
            <span className="w-12 h-[1px] bg-gray-100" />
            Resultados Reais • Odontologia de Alta Performance
            <span className="w-12 h-[1px] bg-gray-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
