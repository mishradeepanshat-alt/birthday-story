"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 8 + 12,
  delay: Math.random() * 10,
}));

const shootingStars = [
  {
    top: "12%",
    left: "75%",
    delay: 5,
  },
  {
    top: "28%",
    left: "15%",
    delay: 12,
  },
  {
    top: "20%",
    left: "55%",
    delay: 20,
  },
];

export default function FloatingStars() {
  return (
    <>
      {/* Floating Glowing Particles */}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/80"

          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}

          initial={{
            y: "110vh",
            opacity: 0,
          }}

          animate={{
            y: "-20vh",
            opacity: [0, 0.8, 0.8, 0],
            x: [0, -15, 15, -10, 0],
          }}

          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Shooting Stars */}

      {shootingStars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute"

          style={{
            top: star.top,
            left: star.left,
          }}

          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}

          animate={{
            opacity: [0, 1, 1, 0],
            x: [-220],
            y: [220],
          }}

          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 12,
            delay: star.delay,
          }}
        >
          <div
            className="
              h-[2px]
              w-36
              rotate-[135deg]
              rounded-full
              bg-gradient-to-r
              from-white
              via-cyan-200
              to-transparent
              shadow-[0_0_20px_rgba(255,255,255,.8)]
            "
          />
        </motion.div>
      ))}
    </>
  );
}