"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  rotateOffset?: number;
  className?: string;
}

import { useEffect, useState } from "react";

export const FloatingElement = ({
  children,
  duration = 5,
  yOffset = -15,
  rotateOffset = 2,
  className = "",
}: FloatingElementProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  if (isMobile) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, yOffset, 0],
        rotate: [0, rotateOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
