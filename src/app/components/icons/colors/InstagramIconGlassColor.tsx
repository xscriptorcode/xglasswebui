import React from "react";

export default function InstagramIconGlassColor() {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105"
      title="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-full h-full"
      >
        <radialGradient
          id="IG1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fccc63" />
          <stop offset=".25" stopColor="#f55555" />
          <stop offset=".5" stopColor="#cc39a4" />
          <stop offset=".75" stopColor="#5851db" />
          <stop offset="1" stopColor="#3f5efb" />
        </radialGradient>
        <path
          fill="url(#IG1)"
          d="M34.5 4h-21C8.91 4 4 8.91 4 13.5v21C4 39.09 8.91 44 13.5 44h21c4.59 0 8.5-4.91 8.5-9.5v-21C43 8.91 39.09 4 34.5 4zm4.5 30.5c0 2.48-2.02 4.5-4.5 4.5h-21c-2.48 0-4.5-2.02-4.5-4.5v-21c0-2.48 2.02-4.5 4.5-4.5h21c2.48 0 4.5 2.02 4.5 4.5v21z"
        />
        <path
          fill="#fff"
          d="M24 15c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 14.5c-3.03 0-5.5-2.47-5.5-5.5S20.97 18.5 24 18.5 29.5 20.97 29.5 24 27.03 29.5 24 29.5zM31.5 14c-.83 0-1.5.67-1.5 1.5S30.67 17 31.5 17s1.5-.67 1.5-1.5S32.33 14 31.5 14z"
        />
      </svg>
    </div>
  );
}
