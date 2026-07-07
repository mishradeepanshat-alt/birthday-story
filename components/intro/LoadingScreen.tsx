"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  size: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function LoadingScreen() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 80 }, () => ({
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.2,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07152E] via-[#1A1038] to-[#050814]" />

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-300/10 blur-[140px]" />

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
          }}
        />
      ))}

      {/* Center */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="mb-8 text-6xl"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          ❤️
        </motion.div>

        <motion.h1
          className="mb-5 text-center text-4xl font-serif tracking-wide text-white md:text-5xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Preparing Something Beautiful...
        </motion.h1>

        <motion.p
          className="mb-10 text-lg text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Please wait...
        </motion.p>

        {/* Progress */}
        <div className="h-1 w-72 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-300 via-amber-300 to-pink-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}