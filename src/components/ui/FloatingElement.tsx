"use client";

import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
  rotateOffset?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  className = "",
}: FloatingElementProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
