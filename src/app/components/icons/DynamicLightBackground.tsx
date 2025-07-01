export default function DynamicLightBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(14)].map((_, i) => {
        const size = 60 + Math.random() * 100;
        const color =
          i % 3 === 0
            ? "bg-white dark:bg-cyan-400"
            : i % 3 === 1
            ? "bg-pink-200 dark:bg-fuchsia-500"
            : "bg-blue-200 dark:bg-indigo-400";

        return (
          <div
            key={i}
            className={`absolute rounded-full blur-3xl ${color} animate-floatGlowFade`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              mixBlendMode: "screen",
            }}
          />
        );
      })}
    </div>
  );
}
