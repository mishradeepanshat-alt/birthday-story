"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type GlassButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function GlassButton({
  children,
  onClick,
  className,
}: GlassButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={clsx(
        "rounded-full",
        "px-10 py-4",
        "font-semibold",
        "text-white",
        "backdrop-blur-xl",
        "bg-white/15",
        "border border-white/30",
        "shadow-xl",
        "transition-all",
        "hover:bg-pink-400/30",
        "hover:shadow-pink-400/40",
        className
      )}
    >
      {children}
    </motion.button>
  );
}