"use client";

import { motion } from "framer-motion";

import PremiumCard from "@/components/ui/PremiumCard";
import PremiumTitle from "@/components/ui/PremiumTitle";
import PremiumButton from "@/components/ui/PremiumButton";

type LetterProps = {
  onNext: () => void;
};

export default function Letter({ onNext }: LetterProps) {
  return (
    <motion.main
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-[700px] w-[700px] rounded-full bg-pink-200/15 blur-[170px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
      />

      <PremiumCard className="w-full max-w-5xl px-10 py-12 md:px-16 md:py-16">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PremiumTitle subtitle="A few words written only for you...">
            💌 A Letter For You
          </PremiumTitle>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mx-auto
            mt-8
            mb-10
            h-px
            w-44
            bg-gradient-to-r
            from-transparent
            via-pink-300
            to-transparent
          "
        />

        {/* Letter */}
        <motion.div
          className="
            mx-auto
            max-w-3xl
            px-2
            letter-font
            text-lg
            md:text-xl
            leading-10
            text-white/85
            space-y-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>My Dearest Anushka, ❤️</p>

          <p>
            Happy Birthday to one of the most wonderful people I know.
          </p>

          <p>
            Today isn't just another date on the calendar. It's the day someone
            truly special came into this world, and that alone makes today worth
            celebrating with all my heart.
          </p>

          <p>
            I wanted to do something different this year. Instead of sending a
            simple birthday message, I wanted to create something that you could
            remember—a small journey filled with warmth, smiles, memories, and
            little surprises that remind you how precious you are.
          </p>

          <p>
            I hope every page of this little website brings a smile to your
            face. Every photograph, every animation, every word has been placed
            here with care because you deserve something made especially for
            you.
          </p>

          <p>
            Never stop smiling. Never stop believing in yourself. Keep chasing
            your dreams with the same beautiful heart that makes everyone around
            you feel comfortable and happy.
          </p>

          <p>
            May this birthday bring endless happiness, countless beautiful
            memories, good health, success in everything you do, and moments
            that become stories you'll cherish forever.
          </p>

          <p>
            Thank you for being exactly who you are.
          </p>

          {/* Divider */}
          <div className="flex justify-center py-8">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          </div>

          {/* Signature */}
          <div className="pt-4 text-right">
            <p className="text-lg text-white/80">
              With lots of love,
            </p>

            <p className="script-font mt-3 text-5xl text-pink-400">
              ❤️ From Someone Who Wishes You the Best ❤️
            </p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          className="mt-16 flex justify-center pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <PremiumButton onClick={onNext}>
            Continue to Your Memories 📸
          </PremiumButton>
        </motion.div>

      </PremiumCard>
    </motion.main>
  );
}