import { Home, UtensilsCrossed, History, LogOut, Diamond } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "menu", icon: UtensilsCrossed, label: "Cuisine" },
];

export const DashboardSidebar = ({ 
  activeSection, 
  onSectionChange 
}: { 
  activeSection: string, 
  onSectionChange: (id: string) => void 
}) => {
  return (
    <>
      {/* Desktop Luxury Zenith Rail */}
      <aside className="hidden md:flex fixed left-4 top-4 bottom-4 w-20 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex-col items-center py-10 z-[100] rim-light shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-16 border border-gold/20 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
          <Diamond className="text-gold" size={24} />
        </div>

        <nav className="flex-1 flex flex-col gap-10">
          {NAV_ITEMS.map((item, i) => (
            <div key={i} className="relative group flex flex-col items-center">
              <button
                className={`p-3.5 rounded-2xl cursor-pointer transition-all relative ${
                  activeSection === item.id 
                    ? "bg-gold text-background shadow-[0_0_30px_rgba(197,160,89,0.3)]" 
                    : "text-gold/40 hover:text-gold hover:bg-white/5"
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </button>
              
              <span className="absolute left-20 px-3 py-1 bg-gold text-background text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        <div className="p-3.5 rounded-2xl text-gold/30 hover:text-red-400 hover:bg-red-400/10 cursor-pointer transition-all mt-auto">
          <LogOut size={22} strokeWidth={1.5} />
        </div>
      </aside>

      {/* Mobile Luxury Bottom Dock */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-around px-2 z-[150] shadow-2xl rim-light">
        {NAV_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl flex flex-col items-center transition-all ${
              activeSection === item.id ? "text-gold bg-gold/5" : "text-gold/30"
            }`}
            onClick={() => onSectionChange(item.id)}
          >
            <item.icon size={20} strokeWidth={1.5} />
            {activeSection === item.id && (
              <div className="w-1 h-1 bg-gold rounded-full mt-1 shadow-[0_0_5px_rgba(197,160,89,1)]" />
            )}
          </div>
        ))}
      </nav>
    </>
  );
};
