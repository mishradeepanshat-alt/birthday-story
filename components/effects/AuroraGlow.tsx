"use client";

import { motion } from "framer-motion";

export default function AuroraGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="
          absolute
          w-[900px]
          h-[900px]
          rounded-full
          bg-pink-500/12
          blur-[170px]
          -top-80
          -left-60
        "
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          w-[850px]
          h-[850px]
          rounded-full
          bg-violet-500/10
          blur-[180px]
          bottom-[-350px]
          right-[-250px]
        "
        animate={{
          x: [0, -140, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          w-[650px]
          h-[650px]
          rounded-full
          bg-amber-300/8
          blur-[140px]
          top-1/3
          left-1/2
        "
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}