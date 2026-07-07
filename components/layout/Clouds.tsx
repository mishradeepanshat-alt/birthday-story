"use client";

import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <>
      <motion.div
        className="absolute top-16 left-0 h-28 w-60 rounded-full bg-white/20 blur-3xl"
        animate={{ x: [-100, 1600] }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-56 left-[-200px] h-36 w-72 rounded-full bg-white/15 blur-3xl"
        animate={{ x: [-200, 1700] }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}