"use client";

import { motion } from "framer-motion";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">

      <div className="flex justify-between text-pink-500 text-sm mb-3">

        <span>Beginning</span>

        <span>
          {current + 1} / {total}
        </span>

        <span>Forever ❤️</span>

      </div>

      <div
        className="
        h-2
        rounded-full
        bg-pink-100
        overflow-hidden
        "
      >
        <motion.div
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: .6,
          }}
          className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-pink-500
          via-rose-500
          to-pink-400
          "
        />
      </div>

    </div>
  );
}