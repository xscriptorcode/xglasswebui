import React from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
