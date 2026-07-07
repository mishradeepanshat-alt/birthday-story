"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";
import FloatingStars from "./FloatingStars";
import GoodbyeMessage from "./GoodbyeMessage";
import ReplayButton from "./ReplayButton";

type EndingProps = {
  onReplay: () => void;
};

export default function Ending({ onReplay }: EndingProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Night Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#04142e]
          via-[#1b2550]
          to-[#40235f]
        "
      />

      {/* Stars */}
      <StarField />

      {/* Floating Particles */}
      <FloatingStars />

      {/* Moon Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="
          absolute
          top-16
          right-20
          h-40
          w-40
          rounded-full
          bg-white/20
          blur-3xl
        "
      />

      {/* Beating Heart */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute top-24 text-6xl"
      >
        ❤️
      </motion.div>

      {/* Goodbye Message */}
      <div className="relative z-20 mt-32 flex flex-col items-center">

        <GoodbyeMessage />

        <ReplayButton onReplay={onReplay} />

      </div>

    </main>
  );
}