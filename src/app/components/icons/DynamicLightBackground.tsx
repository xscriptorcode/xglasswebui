import { useMemo } from "react";

export default function DynamicLightBackground() {
  const lights = useMemo(() => {
    return [...Array(14)].map((_, i) => {
      const size = 60 + Math.random() * 100;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = 12 + Math.random() * 10;
      const animationDelay = Math.random() * 5;

      const color =
        i % 3 === 0
          ? "bg-white dark:bg-cyan-400"
          : i % 3 === 1
          ? "bg-pink-200 dark:bg-fuchsia-500"
          : "bg-blue-200 dark:bg-indigo-400";

      return {
        key: i,
        size,
        top,
        left,
        animationDuration,
        animationDelay,
        color,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.key}
          className={`absolute rounded-full blur-3xl ${light.color} animate-floatGlowFade`}
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            top: `${light.top}%`,
            left: `${light.left}%`,
            animationDuration: `${light.animationDuration}s`,
            animationDelay: `${light.animationDelay}s`,
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
}
