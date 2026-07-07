"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 5 + Math.random() * 4,
  size: 10 + Math.random() * 14,
  type: i % 4,
}));

export default function Confetti() {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            y: -120,
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            x: [
              0,
              -30,
              25,
              -20,
              20,
              0,
            ],
            rotate: 720,
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            delay: particle.delay,
            duration: particle.duration,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
          }}
          className="absolute top-0 z-20"
        >
          {/* Heart */}

          {particle.type === 0 && (
            <div
              style={{
                fontSize: particle.size,
              }}
            >
              ❤️
            </div>
          )}

          {/* Flower */}

          {particle.type === 1 && (
            <div
              style={{
                fontSize: particle.size,
              }}
            >
              🌸
            </div>
          )}

          {/* Sparkle */}

          {particle.type === 2 && (
            <div
              style={{
                fontSize: particle.size,
              }}
            >
              ✨
            </div>
          )}

          {/* Confetti */}

          {particle.type === 3 && (
            <motion.div
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              style={{
                width: particle.size,
                height: particle.size,
              }}
              className="
                rounded-sm
                bg-gradient-to-br
                from-pink-400
                via-yellow-300
                to-purple-400
              "
            />
          )}
        </motion.div>
      ))}
    </>
  );
}