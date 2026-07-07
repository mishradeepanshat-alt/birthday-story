"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 115,
    damping: 28,
    mass: 1,
    });

    const y = useSpring(mouseY, {
    stiffness: 115,
    damping: 28,
    mass: 1,
    });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Glow */}
      <motion.div
        className="
          fixed
          pointer-events-none
          z-[9999]
          h-28
          w-28
          rounded-full
          bg-pink-300/15
          blur-2xl
        "
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />

      {/* Bright Center */}
      <motion.div
        className="
          fixed
          pointer-events-none
          z-[9999]
          h-2
          w-2
          rounded-full
          bg-white/90
          shadow-[0_0_16px_rgba(255,180,210,0.9)]
          mix-blend-screen
        "
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />
    </>
  );
}