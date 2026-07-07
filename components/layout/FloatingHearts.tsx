"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Heart = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      size: 18 + Math.random() * 18,
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none z-20"
          style={{
            left: `${heart.left}%`,
            bottom: "-40px",
            fontSize: `${heart.size}px`,
          }}
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: -1200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}