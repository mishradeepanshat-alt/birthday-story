"use client";

import { motion } from "framer-motion";

type WelcomeScreenProps = {
  onBegin: () => void;
};

export default function WelcomeScreen({
  onBegin,
}: WelcomeScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07152E] via-[#1A1038] to-[#050814]" />

      {/* Glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-pink-300/10 blur-[160px]" />

      {/* Floating Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 4 + 4,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Glass Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="
          relative
          z-20
          max-w-2xl
          w-full
          rounded-[32px]
          border
          border-white/15
          bg-white/10
          backdrop-blur-2xl
          shadow-2xl
          px-10
          py-14
          text-center
        "
      >
        <motion.h1
          className="text-5xl font-serif text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dear Anushka,
        </motion.h1>

        <motion.div
          className="space-y-5 text-white/80 leading-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>Before you begin...</p>

          <p>
            This isn't simply a birthday website.
          </p>

          <p>
            It's a collection of memories,
            moments and feelings that
            I wanted to preserve.
          </p>

          <p>
            Every chapter has been
            created with love.
          </p>

          <p>
            Take your time...
          </p>

          <p>
            Enjoy every moment.
          </p>

          <p className="text-3xl mt-6">
            ❤️
          </p>
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onBegin}
          className="
            mt-12
            rounded-full
            px-10
            py-4
            text-lg
            font-medium
            text-[#07152E]
            bg-gradient-to-r
            from-[#F8D7DA]
            via-[#E9C46A]
            to-[#F8D7DA]
            shadow-xl
            transition-all
          "
        >
          Begin The Journey →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}