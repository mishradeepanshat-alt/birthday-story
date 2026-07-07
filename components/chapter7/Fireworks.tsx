"use client";

import { motion } from "framer-motion";

const fireworks = [
  { top: "10%", left: "15%", delay: 0 },
  { top: "18%", left: "75%", delay: 0.8 },
  { top: "35%", left: "50%", delay: 1.6 },
  { top: "20%", left: "30%", delay: 2.2 },
  { top: "12%", left: "60%", delay: 3 },
  { top: "40%", left: "85%", delay: 3.8 },
];

export default function Fireworks() {
  return (
    <>
      {fireworks.map((firework, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{
            top: firework.top,
            left: firework.left,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: firework.delay,
          }}
        >
          {/* Rays */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            >
              <div
                className="
                  h-16
                  w-1
                  rounded-full
                  bg-gradient-to-t
                  from-yellow-300
                  via-pink-400
                  to-white
                "
              />
            </motion.div>
          ))}

          {/* Center Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-5
              w-5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
              shadow-[0_0_40px_rgba(255,255,255,1)]
            "
          />

          {/* Outer Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-300/20
              blur-2xl
            "
          />
        </motion.div>
      ))}
    </>
  );
}