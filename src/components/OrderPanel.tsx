import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import Image from "next/image";

export const OrderPanel = ({ 
  cart, 
  onUpdate, 
  onRemove,
  isOpen, 
  onClose 
}: { 
  cart: any[], 
  onUpdate: (id: string, delta: number) => void,
  onRemove: (id: string) => void,
  isOpen: boolean, 
  onClose: () => void 
}) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + tax;

  return (
    <aside className={`fixed right-0 top-0 h-full w-full md:w-96 volcanic-stone border-l border-white/5 p-8 md:p-10 flex flex-col z-[120] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 md:translate-x-0 md:opacity-100"}`}>
      {/* Vellum Receipt Overlay Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay tibeb-pattern" />
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      
      <div className="mb-12 relative z-10">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-3xl font-serif font-bold text-gold-gradient leading-tight">Your Tray</h2>
          <button onClick={onClose} className="md:hidden text-gold/40 hover:text-gold uppercase text-[10px] font-bold tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">Close</button>
        </div>
        <p className="text-[10px] text-gold/40 uppercase tracking-[0.4em] font-medium border-b border-gold/10 pb-4">Exclusive Dining • Table 31</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar scroll-smooth">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gold/20">
            <ShoppingBag size={64} strokeWidth={0.5} className="mb-6 opacity-30" />
            <p className="font-serif italic text-lg opacity-40">The tray awaits your selection</p>
          </div>
        ) : cart.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key={item.id} 
            className="group relative"
          >
            <div className="flex gap-6 items-center">
              <div className="w-20 h-20 relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-visible p-2 shadow-inner rim-light group-hover:bg-white/[0.05] transition-all duration-500">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-foreground/90 tracking-wide uppercase">{item.name}</h4>
                  <button onClick={() => onRemove(item.id)} className="text-red-400/20 hover:text-red-400 transition-colors">
                    <Trash2 size={12} />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 bg-white/5 rounded-full px-3 py-1.5 border border-white/5">
                    <button onClick={() => onUpdate(item.id, -1)} className="text-gold/30 hover:text-gold transition-colors"><Minus size={10} /></button>
                    <span className="text-[10px] font-bold w-4 text-center text-gold">{item.quantity}</span>
                    <button onClick={() => onUpdate(item.id, 1)} className="text-gold/30 hover:text-gold transition-colors"><Plus size={10} /></button>
                  </div>
                  <span className="font-bold text-gold text-sm tracking-tight">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto space-y-5 pt-10 border-t border-gold/10">
        <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/40">
          <span>Sub Total</span>
          <span className="text-foreground/80">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/40">
          <span>VAT (15%)</span>
          <span className="text-foreground/80">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-2xl font-serif font-bold pt-4">
          <span className="text-gold-gradient">Tray Total</span>
          <span className="text-gold drop-shadow-[0_0_15px_rgba(197,160,89,0.2)]">${total.toFixed(2)}</span>
        </div>

        <motion.button
          className="w-full bg-gold text-background font-bold py-6 rounded-3xl mt-8 shadow-[0_30px_60px_rgba(197,160,89,0.15)] text-xs tracking-[0.3em] uppercase transition-all rim-light"
          whileHover={{ scale: 1.02, backgroundColor: "#D4B982", boxShadow: "0 40px 80px rgba(197,160,89,0.25)" }}
          whileTap={{ scale: 0.98 }}
        >
          Confirm Experience
        </motion.button>
      </div>
    </aside>
  );
};
