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

export const FloatingElement = ({
  children,
  duration = 5,
  yOffset = -15,
  rotateOffset = 2,
  className = "",
}: FloatingElementProps) => {
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
