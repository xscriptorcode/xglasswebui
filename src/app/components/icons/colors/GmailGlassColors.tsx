import React from "react";

export default function GmailGlassColor() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Gmail"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-full h-full"
      >
        <path
          fill="#e75a4d"
          d="M42 39c1.65 0 3-1.35 3-3V12c0-.44-.1-.85-.26-1.23L24 24.5 3.26 10.77C3.1 11.15 3 11.56 3 12v24c0 1.65 1.35 3 3 3z"
        />
        <path
          fill="#f1f1f1"
          d="M42 9H6c-.26 0-.5.05-.74.13L24 23.5l18.74-14.37c-.24-.08-.48-.13-.74-.13z"
        />
        <path
          fill="#d54b3d"
          d="M24 23.5 3 9.45V36c0 1.65 1.35 3 3 3h36c1.65 0 3-1.35 3-3V9.45z"
        />
      </svg>
    </div>
  );
}
