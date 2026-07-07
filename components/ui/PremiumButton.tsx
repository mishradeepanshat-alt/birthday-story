"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import useSound from "@/hooks/useSound";

type PremiumButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function PremiumButton({
  children,
  onClick,
  className,
  disabled = false,
}: PremiumButtonProps) {
  const { play } = useSound();
  return (
    <motion.button
      onMouseEnter={() => play("ui/hover", 0.15)}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      onClick={() => {
        play("ui/click", 0.35);
        onClick?.();
      }}
      disabled={disabled}
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-full

        px-10
        py-4

        text-lg
        font-medium

        text-white

        bg-gradient-to-r
        from-pink-500
        via-rose-500
        to-pink-400

        shadow-[0_15px_40px_rgba(244,114,182,.45)]

        border
        border-white/30

        backdrop-blur-xl

        transition-all
        duration-300

        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        className
      )}
    >
      {/* Shine Animation */}
      <motion.div
        className="
          absolute
          top-0
          left-[-120%]
          h-full
          w-20
          bg-white/30
          skew-x-[-20deg]
        "
        animate={{
          left: ["-120%", "150%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-white/10
          via-transparent
          to-white/10
        "
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}