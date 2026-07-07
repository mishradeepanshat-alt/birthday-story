"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { memories } from "@/data/memories";

import MemoryCard from "./MemoryCard";
import ProgressBar from "./ProgressBar";
import Navigation from "./Navigation";

type MemoriesProps = {
  onNext: () => void;
};

export default function Memories({
  onNext,
}: MemoriesProps) {

  const [current, setCurrent] = useState(0);

  const total = memories.length;

  const previous = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const next = () => {
    if (current < total - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  /* ---------------- Keyboard ---------------- */

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") previous();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [current]);

  /* ---------------- Mouse Wheel ---------------- */

  useEffect(() => {

    let locked = false;

    const handleWheel = (e: WheelEvent) => {

      if (locked) return;

      locked = true;

      if (e.deltaY > 0) {

        next();

      } else {

        previous();

      }

      setTimeout(() => {

        locked = false;

      }, 700);

    };

    window.addEventListener("wheel", handleWheel);

    return () => {

      window.removeEventListener("wheel", handleWheel);

    };

  }, [current]);

  return (

    <motion.main

      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-8
      py-20
      overflow-hidden
      "

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* Background Glow */}

      <motion.div

        animate={{

          scale: [1, 1.08, 1],

          opacity: [0.25, 0.35, 0.25],

        }}

        transition={{

          repeat: Infinity,

          duration: 12,

        }}

        className="
        absolute
        h-[900px]
        w-[900px]
        rounded-full
        bg-pink-300/20
        blur-[120px]
        "

      />

      <div className="relative z-10 w-full max-w-7xl">

        {/* Heading */}

        <motion.div

          initial={{

            opacity: 0,

            y: -30,

          }}

          animate={{

            opacity: 1,

            y: 0,

          }}

          className="mb-10 text-center"

        >

          <p className="tracking-[8px] uppercase text-sm text-pink-500">

            Chapter Four

          </p>

          <h1 className="hero-font mt-4 text-6xl text-pink-700">

            Your Beautiful Memories ❤️

          </h1>

          <p className="mt-4 text-xl text-[#6A4A57]">

            Every picture tells a story...

          </p>

        </motion.div>

        {/* Card */}

        <AnimatePresence mode="wait">

          <MemoryCard

            key={memories[current].id}

            memory={memories[current]}

          />

        </AnimatePresence>

        {/* Progress */}

        <div className="mt-12">

          <ProgressBar

            current={current}

            total={total}

          />

        </div>

        {/* Navigation */}

        <Navigation

          current={current}

          total={total}

          onPrevious={previous}

          onNext={next}

        />

      </div>

    </motion.main>

  );

}