"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import PremiumCard from "@/components/ui/PremiumCard";
import PremiumButton from "@/components/ui/PremiumButton";
import PremiumTitle from "@/components/ui/PremiumTitle";

type HeroProps = {
  onNext: () => void;
};

export default function Hero({ onNext }: HeroProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPosition({
      x: Math.random() * 220 - 110,
      y: Math.random() * 140 - 70,
    });
  };

  return (
    <motion.main
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-[700px] w-[700px] rounded-full bg-pink-300/15 blur-[170px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-yellow-200/10 blur-[140px] right-0 bottom-0"
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <PremiumCard className="relative max-w-4xl w-full px-10 py-14 text-center">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-block rounded-full border border-pink-300/20 bg-white/10 px-6 py-2 backdrop-blur-lg"
        >
          <p className="uppercase tracking-[6px] text-xs md:text-sm text-pink-300">
            A Little Surprise
          </p>
        </motion.div>

        {/* Title */}
        <div className="mt-8">
          <PremiumTitle subtitle="A tiny surprise has been waiting patiently just for you...">
            Are You Ready,
          </PremiumTitle>
        </div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="
            script-font
            mt-8
            text-6xl
            md:text-8xl
            font-semibold
            text-pink-300
            drop-shadow-[0_0_25px_rgba(255,192,203,0.4)]
          "
        >
          Anushka ❤️
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-pink-300 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            md:text-2xl
            leading-10
            text-white/85
          "
        >
          Every memory,
          every smile,
          every little moment has quietly become a beautiful story.

          <br />
          <br />

          Today is another page in that story...
          written especially for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
          }}
        >
          <PremiumButton onClick={onNext}>
            Yes, Let's Begin ✨
          </PremiumButton>

          <motion.div
            animate={noPosition}
            transition={{
              type: "spring",
              stiffness: 320,
            }}
            onMouseEnter={moveNoButton}
          >
            <PremiumButton>
              No 🙈
            </PremiumButton>
          </motion.div>
        </motion.div>

      </PremiumCard>
    </motion.main>
  );
}