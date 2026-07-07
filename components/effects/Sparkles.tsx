"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Sparkles() {
  const sparkles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="pointer-events-none fixed z-[2] rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,236,170,.9) 45%, rgba(255,236,170,0) 100%)",
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}