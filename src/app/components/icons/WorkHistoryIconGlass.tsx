import React from "react";

export default function WorkHistoryIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Work History"
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <polyline points="12 6 12 12 16 14" stroke="currentColor" />
      </svg>
    </div>
  );
}
