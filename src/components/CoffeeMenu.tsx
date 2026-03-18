"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { FloatingElement } from "./ui/FloatingElement";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const CoffeeMenu = ({ items, onAdd }: { items: any[], onAdd: (item: any) => void }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-36 pt-16"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="relative z-10 group cursor-pointer"
          onClick={() => onAdd(item)}
        >
          {/* Layer 3: Foreground (Floating Image) - Luxury Auric Glow behind it */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 h-52 z-50 pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group-hover:scale-110 group-hover:-translate-y-6">
            <div className="absolute inset-0 auric-glow z-0" />
            <FloatingElement duration={5 + (i % 3)} yOffset={-20} rotateOffset={6}>
              <div className="relative w-full h-full p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain filter drop-shadow-[0_45px_45px_rgba(0,0,0,0.85)] brightness-110 contrast-110"
                />
              </div>
            </FloatingElement>
          </div>

          {/* Layer 2: Midground (Luxury Glass Card) */}
          <GlassCard className="mt-20 pt-32 pb-10 transition-all duration-700 bg-white/[0.03] border-white/5 rim-light overflow-visible group-hover:bg-white/[0.07] group-hover:translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif text-gold-gradient font-bold leading-[1.1] pr-4">{item.name}</h3>
                <span className="text-gold font-bold text-2xl drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">{item.price.toFixed(2)} Birr</span>
              </div>
              <p className="text-foreground/40 text-sm font-light leading-relaxed line-clamp-2 italic">
                {item.description}
              </p>
            </div>

            <div className="flex justify-between items-end pt-6 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[9px] text-gold/40 uppercase tracking-[0.3em] font-medium mb-1">Cuisine Rank</span>
                <span className="text-[11px] text-gold font-semibold uppercase tracking-[0.15em]">{item.tag}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); onAdd(item); }}
                className="text-[10px] px-6 py-3 rounded-full border border-gold/30 text-gold transition-all font-bold tracking-[0.1em] uppercase shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
              >
                Reserve Order
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
};
