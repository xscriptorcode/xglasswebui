import React from "react";

export default function TrophyIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Trophy / Achievements"
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
        <path d="M8 21h8" stroke="currentColor" />
        <path d="M12 17v4" stroke="currentColor" />
        <path d="M17 4v3a5 5 0 0 1-10 0V4" stroke="currentColor" />
        <path d="M21 4h-4" stroke="currentColor" />
        <path d="M7 4H3" stroke="currentColor" />
        <path d="M17 4a4 4 0 0 0 4 4" stroke="currentColor" />
        <path d="M3 8a4 4 0 0 0 4-4" stroke="currentColor" />
      </svg>
    </div>
  );
}
