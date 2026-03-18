"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Background = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  // Reduce particle count on mobile for performance
  const particleCount = isMobile ? 2 : 6;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Tibeb Pattern Overlay */}
      <div className="absolute inset-0 tibeb-pattern opacity-10 pointer-events-none" />
      
      {/* Bokeh / Glow Effects */}
      <div className="absolute inset-0 bokeh-bg pointer-events-none" />
      
      {/* Animated Floating Beans (Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/10 blur-xl"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20
            }}
          />
        ))}
      </div>
    </div>
  );
};
