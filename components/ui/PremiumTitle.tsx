"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type PremiumTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  center?: boolean;
};

export default function PremiumTitle({
  children,
  subtitle,
  className,
  center = true,
}: PremiumTitleProps) {
  return (
    <div className={clsx(center && "text-center")}>
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={clsx(
          `
          hero-font
          text-5xl
          md:text-7xl
          font-semibold
          tracking-wide
          leading-tight

          bg-gradient-to-r
          from-pink-400
          via-rose-500
          to-yellow-400

          bg-clip-text
          text-transparent

          drop-shadow-[0_0_18px_rgba(255,170,210,.45)]
          `,
          className
        )}
      >
        {children}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            mt-5
            text-lg
            md:text-xl
            letter-font
            text-rose-700/90
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}