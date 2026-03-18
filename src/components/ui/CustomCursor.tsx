"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("button, a, .cursor-pointer"));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className="w-full h-full border border-gold rounded-full"
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.6,
          borderWidth: isHovering ? "1px" : "2px",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </motion.div>
  );
};
