"use client";

import { Search } from "lucide-react";

const CATEGORIES = ["All", "Buna", "Tibs", "Beyaynetu", "Bread"];

export const CategoryTabs = ({ 
  activeCategory, 
  onCategoryChange, 
  onSearch 
}: { 
  activeCategory: string, 
  onCategoryChange: (cat: string) => void, 
  onSearch: (query: string) => void 
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
      <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar scroll-smooth">
        {CATEGORIES.map((cat, i) => (
          <button
            key={i}
            onClick={() => onCategoryChange(cat)}
            className={`px-8 py-3.5 rounded-full border text-xs font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap relative group ${
              activeCategory === cat 
                ? "bg-gold border-gold text-background shadow-[0_15px_30px_rgba(197,160,89,0.3)]" 
                : "bg-white/5 border-white/10 text-gold/40 hover:text-gold hover:border-gold/40"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full shadow-[0_0_10px_#C5A059]" />
            )}
          </button>
        ))}
      </div>

      <div className="relative group w-full lg:max-w-md">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/30 group-focus-within:text-gold transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="CURATE YOUR EXPERIENCE..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 pl-14 pr-6 text-xs font-bold tracking-widest text-foreground focus:outline-none focus:border-gold/40 focus:bg-white/5 transition-all placeholder:text-gold/20 rim-light uppercase"
        />
      </div>
    </div>
  );
};
