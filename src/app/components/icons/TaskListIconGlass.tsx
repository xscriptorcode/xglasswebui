import React from "react";

export default function TaskListIconGlass() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Task List"
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
        <path d="M9 6h11" stroke="currentColor" />
        <path d="M9 12h11" stroke="currentColor" />
        <path d="M9 18h11" stroke="currentColor" />
        <path d="M5 6l1 1 2-2" stroke="currentColor" />
        <path d="M5 12l1 1 2-2" stroke="currentColor" />
        <path d="M5 18l1 1 2-2" stroke="currentColor" />
      </svg>
    </div>
  );
}
