import React from "react";

export default function StarIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Star / Reviews"
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 
                         5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}
