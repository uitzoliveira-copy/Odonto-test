import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-trigger")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? "rgba(197, 160, 89, 0.5)" : "rgba(197, 160, 89, 1)",
          backgroundColor: isHovering ? "rgba(197, 160, 89, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor-dot hidden md:block"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
      />
    </>
  );
}
