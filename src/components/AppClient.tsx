"use client";

import { motion, AnimatePresence } from "framer-motion";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { CoffeeMenu } from "@/components/CoffeeMenu";
import { CategoryTabs } from "@/components/CategoryTabs";
import { Background } from "@/components/ui/Background";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import OrderPanel to reduce initial bundle size
const OrderPanel = dynamic(() => import("./OrderPanel").then(mod => mod.OrderPanel), {
  ssr: false,
});

interface AppClientProps {
  items: any[];
}

export default function AppClient({ items }: AppClientProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);

  // Cart Logic
  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOrderPanelOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Filter Logic
  const filteredItems = items
    .filter(item => activeCategory === "All" || item.category === activeCategory)
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="relative min-h-screen volcanic-stone subtle-grain overflow-hidden selection:bg-gold/30 selection:text-white">
      <Background />

      <div className="flex flex-col md:flex-row min-h-screen">
        <DashboardSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <div className="flex-1 md:ml-28 md:mr-[400px] p-8 md:p-14 pb-32 md:pb-14 overflow-y-auto custom-scrollbar relative z-10">
          <header className="mb-16 md:mb-24 flex justify-between items-start relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 tracking-tight">
                <span className="text-foreground opacity-90">
                  {activeSection === "home" ? "Biftu" : activeSection === "menu" ? "Artisan" : activeSection === "history" ? "Heritage" : "Select"}
                </span>
                <span className="text-gold-gradient italic font-normal tracking-normal">
                  {activeSection === "home" ? "Legacy" : activeSection === "menu" ? "Cuisine" : "Cuisine"}
                </span>
              </h1>
              <div className="flex items-center gap-4 text-gold/30">
                <span className="w-12 h-[1px] bg-gold/20 mr-2" />
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em]">
                  {activeSection === "home" ? "Augustus 2026 • Curating the spirit of Addis" : "Excellence in every interaction"}
                </p>
              </div>
              <div className="tibeb-line mt-8 opacity-20" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOrderPanelOpen(true)}
              className="md:hidden p-4 bg-gold text-background rounded-2xl relative shadow-2xl rim-light"
            >
              <ShoppingBag size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  {cart.length}
                </span>
              )}
            </motion.button>
          </header>

          <AnimatePresence mode="wait">
            {activeSection === "home" || activeSection === "menu" ? (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CategoryTabs
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onSearch={setSearchQuery}
                />
                <div className="pb-20">
                  <CoffeeMenu items={filteredItems} onAdd={addToCart} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <OrderPanel
          cart={cart}
          onUpdate={updateQuantity}
          onRemove={removeFromCart}
          isOpen={isOrderPanelOpen}
          onClose={() => setIsOrderPanelOpen(false)}
        />
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
