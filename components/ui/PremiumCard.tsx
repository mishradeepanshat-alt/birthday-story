"use client";

import { motion } from "framer-motion";

type PremiumCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PremiumCard({
  children,
  className = "",
}: PremiumCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/15
        bg-white/[0.08]
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {/* Gold Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-yellow-300/5
          via-transparent
          to-pink-300/5
          pointer-events-none
        "
      />

      {/* Border Highlight */}
      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          border
          border-white/5
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}