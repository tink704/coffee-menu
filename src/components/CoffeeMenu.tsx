"use client";

import { GlassCard } from "./ui/GlassCard";
import Image from "next/image";

export const CoffeeMenu = ({ items, onAdd }: { items: any[], onAdd: (item: any) => void }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-36 pt-16">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="relative z-10 group cursor-pointer"
          onClick={() => onAdd(item)}
        >
          {/* Food Image Container */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 md:w-52 md:h-52 z-50 pointer-events-none flex items-center justify-center">
             <div className="absolute inset-0 auric-glow z-0" />
             <Image
                src={item.image}
                alt={item.name}
                width={208}
                height={208}
                priority={i < 4}
                className="object-contain filter drop-shadow-[0_45px_45px_rgba(0,0,0,0.85)] brightness-110 contrast-110 z-10 w-full h-full"
              />
          </div>

          {/* Luxury Glass Card */}
          <GlassCard className="mt-20 pt-32 pb-10 bg-white/[0.03] border-white/5 rim-light overflow-visible group-hover:bg-white/[0.07]">
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
              <button
                onClick={(e) => { e.stopPropagation(); onAdd(item); }}
                className="text-[10px] px-6 py-3 rounded-full border border-gold/30 text-gold transition-all font-bold tracking-[0.1em] uppercase shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:bg-gold hover:text-black"
              >
                Reserve Order
              </button>
            </div>
          </GlassCard>
        </div>
      ))}
    </div>
  );
};
