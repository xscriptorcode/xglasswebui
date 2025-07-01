import React from "react";

export default function FacebookIconGlassColor() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Facebook"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-full h-full"
      >
        <path
          fill="#1877f2"
          d="M24 4C12.95 4 4 12.95 4 24c0 9.94 7.25 18.17 16.75 19.75v-14h-5v-6h5v-4.5c0-5.07 3-7.87 7.6-7.87 2.2 0 4.5.4 4.5.4v5h-2.54c-2.5 0-3.28 1.56-3.28 3.16V24h5.6l-.9 6h-4.7v14C36.75 42.17 44 33.94 44 24 44 12.95 35.05 4 24 4z"
        />
        <path
          fill="#fff"
          d="M30.1 30l.9-6h-5.6v-3.2c0-1.6.78-3.16 3.28-3.16H31v-5s-2.3-.4-4.5-.4c-4.6 0-7.6 2.8-7.6 7.87V24h-5v6h5v14c1.06.17 2.14.25 3.25.25s2.19-.08 3.25-.25V30z"
        />
      </svg>
    </div>
  );
}
