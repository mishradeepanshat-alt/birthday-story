"use client";

import { motion } from "framer-motion";

type LetterPaperProps = {
  visible: boolean;
};

export default function LetterPaper({
  visible,
}: LetterPaperProps) {
  return (
    <motion.div
      initial={{
        y: 120,
        opacity: 0,
        scale: 0.92,
      }}
      animate={{
        y: visible ? -220 : 120,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.92,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-[155px]
        z-10
        w-[360px]
        h-[470px]
        -translate-x-1/2

        rounded-[20px]

        bg-gradient-to-b
        from-[#fffdf9]
        via-[#fff9ef]
        to-[#fdf1d8]

        border
        border-[#e8d9b8]

        shadow-[0_30px_80px_rgba(0,0,0,.22)]

        overflow-hidden
      "
    >
      {/* Paper Texture */}

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:18px_18px]" />

      {/* Header */}

      <div className="pt-12 text-center">

        <h2 className="script-font text-3xl text-pink-700">
          My Dearest Anushka ❤️
        </h2>

      </div>

      {/* Decorative Line */}

      <div className="mx-auto mt-5 h-px w-56 bg-pink-200" />

      {/* Fake Letter Lines */}

      <div className="mt-10 space-y-5 px-12">

        <div className="h-2 rounded-full bg-pink-100" />
        <div className="h-2 rounded-full bg-pink-100 w-[92%]" />
        <div className="h-2 rounded-full bg-pink-100 w-[84%]" />
        <div className="h-2 rounded-full bg-pink-100" />
        <div className="h-2 rounded-full bg-pink-100 w-[78%]" />

        <div className="pt-5" />

        <div className="h-2 rounded-full bg-pink-100" />
        <div className="h-2 rounded-full bg-pink-100 w-[88%]" />
        <div className="h-2 rounded-full bg-pink-100 w-[75%]" />
        <div className="h-2 rounded-full bg-pink-100" />
        <div className="h-2 rounded-full bg-pink-100 w-[60%]" />

      </div>

      {/* Signature */}

      <div className="absolute bottom-10 right-10">

        <p className="script-font text-2xl text-pink-500">
          Deepansha ❤️
        </p>

      </div>
    </motion.div>
  );
}