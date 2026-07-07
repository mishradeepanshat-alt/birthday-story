"use client";

import { motion } from "framer-motion";

import PremiumCard from "@/components/ui/PremiumCard";
import PremiumTitle from "@/components/ui/PremiumTitle";
import PremiumButton from "@/components/ui/PremiumButton";

type InvitationProps = {
  onNext: () => void;
};

export default function Invitation({ onNext }: InvitationProps) {
  return (
    <motion.main
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-[700px] w-[700px] rounded-full bg-pink-300/15 blur-[170px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
      />

      {/* Card */}
      <PremiumCard className="w-full max-w-3xl text-center px-10 py-12 md:px-14 md:py-16">

        {/* Chapter */}
        <motion.p
          className="mb-6 text-sm uppercase tracking-[8px] text-pink-500"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Chapter Two
        </motion.p>

        {/* Title */}
        <PremiumTitle
          subtitle="Before we go any further, there is something waiting just for you..."
        >
          Wait... 💌
        </PremiumTitle>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mx-auto
            mt-8
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-pink-300
            to-transparent
          "
        />

        {/* Text */}
        <motion.p
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            leading-9
            text-white/85
            md:text-2xl
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Every birthday deserves something unforgettable.
          <br />
          <br />
          So instead of simply wishing you <b>Happy Birthday</b>, I wanted to
          create a little journey... one filled with memories, smiles, and a
          few surprises waiting around every corner.
          <br />
          <br />
          And it all begins with a letter written especially for you.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-16 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <PremiumButton onClick={onNext}>
            Open the Letter ❤️
          </PremiumButton>
        </motion.div>

      </PremiumCard>
    </motion.main>
  );
}