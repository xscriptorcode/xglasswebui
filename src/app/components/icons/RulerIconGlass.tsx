import React from "react";

export default function RulerIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Ruler"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" transform="rotate(45 12 12)" stroke="currentColor" />
        <path d="M7.5 16.5l1-1" stroke="currentColor" />
        <path d="M10.5 13.5l1-1" stroke="currentColor" />
        <path d="M13.5 10.5l1-1" stroke="currentColor" />
        <path d="M16.5 7.5l1-1" stroke="currentColor" />
      </svg>
    </div>
  );
}
