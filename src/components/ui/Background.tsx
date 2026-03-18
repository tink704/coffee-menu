"use client";

import { useEffect, useState } from "react";

export const Background = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Tibeb Pattern Overlay */}
      <div className="absolute inset-0 tibeb-pattern opacity-10 pointer-events-none" />
      
      {/* Bokeh / Glow Effects */}
      <div className="absolute inset-0 bokeh-bg pointer-events-none" />
    </div>
  );
};
