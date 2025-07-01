import React from "react";

export default function InstagramIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          stroke="currentColor"
        />
        <path
          d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z"
          stroke="currentColor"
        />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor" />
      </svg>
    </div>
  );
}
