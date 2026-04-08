import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinished, 1000); // Wait for exit animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinished]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-premium-black text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8"
      >
        <Logo goldOnly className="scale-150" />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-[1px] bg-premium-gold mb-8"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-sm md:text-base font-sans tracking-[0.2em] uppercase text-gray-400 text-center px-4 max-w-lg"
      >
        Transformando sorrisos com excelência, tecnologia e cuidado humanizado.
      </motion.p>
    </motion.div>
  );
}
