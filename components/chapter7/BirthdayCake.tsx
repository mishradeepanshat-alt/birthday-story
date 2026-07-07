"use client";

import { motion } from "framer-motion";

export default function BirthdayCake() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
        y: 120,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 2.5,
        duration: 1,
        type: "spring",
      }}
      className="relative mt-16 flex flex-col items-center"
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          bottom-0
          h-64
          w-64
          rounded-full
          bg-pink-400/30
          blur-[80px]
        "
      />

      {/* Candles */}
      <div className="relative flex gap-10 mb-2 z-20">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative flex flex-col items-center"
          >
            {/* Flame */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -2, 0],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8 + item * 0.2,
              }}
              className="
                h-5
                w-3
                rounded-full
                bg-yellow-300
                shadow-[0_0_25px_rgba(255,230,80,.9)]
              "
            />

            {/* Candle */}
            <div
              className="
                mt-1
                h-12
                w-2
                rounded-full
                bg-white
              "
            />
          </div>
        ))}
      </div>

      {/* Cake Layer 1 */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3 }}
        className="
          h-20
          w-72
          rounded-t-3xl
          bg-gradient-to-r
          from-pink-300
          via-rose-300
          to-pink-300
          border-4
          border-pink-200
        "
      />

      {/* Cream */}
      <div
        className="
          h-6
          w-80
          rounded-full
          bg-white
          shadow-lg
        "
      />

      {/* Cake Layer 2 */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.3 }}
        className="
          h-24
          w-96
          rounded-3xl
          bg-gradient-to-r
          from-pink-400
          via-rose-400
          to-pink-400
          border-4
          border-pink-300
        "
      />

      {/* Cake Stand */}
      <div
        className="
          mt-4
          h-5
          w-[430px]
          rounded-full
          bg-pink-100
        "
      />
    </motion.div>
  );
}