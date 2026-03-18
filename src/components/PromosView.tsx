"use client";

import { motion } from "framer-motion";
import { Coffee, Tag } from "lucide-react";

export const PromosView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {[1, 2].map((i) => (
        <div key={i} className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-gold/20 to-transparent border border-gold/20">
          <div className="relative z-10">
            <Tag className="text-gold mb-4" size={32} />
            <h3 className="text-2xl font-serif font-bold mb-2">Buna Break</h3>
            <p className="text-foreground/60 text-sm mb-6 max-w-[200px]">
              25% OFF on all Traditional Coffee ceremonies during early birds only.
            </p>
            <button className="px-6 py-2 bg-gold text-background rounded-full font-bold text-sm">
              Claim Now
            </button>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10">
            <Coffee size={200} />
          </div>
        </div>
      ))}
    </motion.div>
  );
};
