"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { CheckCircle, Clock } from "lucide-react";

export const HistoryView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      {[1, 2, 3].map((order) => (
        <GlassCard key={order} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
              <CheckCircle size={24} className="text-gold" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Order #ORD-202{order}</h4>
              <p className="text-xs text-foreground/40 flex items-center gap-1 mt-1">
                <Clock size={12} /> Today, 0{order}:15 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-between">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
              <div className="text-xs text-foreground/40 self-center">+2 items</div>
            </div>
            <div className="text-lg font-bold text-gold">24.50 Birr</div>
          </div>
        </GlassCard>
      ))}
    </motion.div>
  );
};
