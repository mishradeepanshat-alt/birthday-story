"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingLights() {
  const lights = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 120 + Math.random() * 180,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <>
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="fixed rounded-full pointer-events-none z-0"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: light.size,
            height: light.size,
            background:
              "radial-gradient(circle, rgba(255,210,230,.25) 0%, rgba(255,210,230,.08) 50%, transparent 100%)",
            filter: "blur(45px)",
          }}
          animate={{
            x: [-40, 40, -40],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: light.delay,
          }}
        />
      ))}
    </>
  );
}