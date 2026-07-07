"use client";

import { motion } from "framer-motion";

const lines = [
  {
    text: "Happy",
    delay: 0.5,
    className: "text-6xl md:text-8xl hero-font text-white",
  },
  {
    text: "Birthday",
    delay: 1.5,
    className: "text-7xl md:text-9xl hero-font text-pink-300",
  },
  {
    text: "Anushka ❤️",
    delay: 2.8,
    className: "text-5xl md:text-7xl hero-font text-yellow-300",
  },
  {
    text: "Today is all about you.",
    delay: 4.5,
    className: "text-2xl md:text-3xl text-pink-100",
  },
  {
    text: "May every smile become a beautiful memory.",
    delay: 6,
    className: "text-xl md:text-2xl text-white/90",
  },
  {
    text: "May every dream find its way to reality.",
    delay: 7.8,
    className: "text-xl md:text-2xl text-white/90",
  },
  {
    text: "May your heart always stay as beautiful as it is today.",
    delay: 9.5,
    className: "text-xl md:text-2xl text-pink-100",
  },
  {
    text: "You deserve endless happiness, love, success and countless reasons to smile.",
    delay: 11.5,
    className: "text-xl md:text-2xl text-yellow-200 max-w-4xl",
  },
  {
    text: "Happy Birthday once again ❤️",
    delay: 14,
    className: "text-3xl md:text-5xl hero-font text-white",
  },
];

export default function CelebrationText() {
  return (
    <div className="mb-14 flex flex-col items-center text-center space-y-6">

      {lines.map((line, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: line.delay,
            duration: 1,
          }}
        >
          <motion.p
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className={line.className}
          >
            {line.text}
          </motion.p>
        </motion.div>

      ))}

    </div>
  );
}