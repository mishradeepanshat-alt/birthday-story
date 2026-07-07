"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import BirthdayCake from "./BirthdayCake";
import Fireworks from "./Fireworks";
import Confetti from "./Confetti";
import CelebrationText from "./CelebrationText";

type CelebrationProps = {
  onReplay: () => void;
};

export default function Celebration({
  onReplay,
}: CelebrationProps) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onReplay();
    }, 15000);

    return () => clearTimeout(timer);

  }, [onReplay]);

  return (

    <motion.main

      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      px-8
      "

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      transition={{ duration: 2 }}

    >

      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#12001c]
        via-[#2b003d]
        to-[#090011]
        "
      />

      {/* Fireworks */}

      <Fireworks />

      {/* Confetti */}

      <Confetti />

      {/* Center */}

      <div
        className="
        relative
        z-20
        flex
        flex-col
        items-center
        "
      >

        <CelebrationText />

        <BirthdayCake />

        <motion.p

          className="
          mt-10
          text-center
          text-xl
          text-pink-100
          "

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 7,
            duration: 2,
          }}

        >

          Thank you for celebrating this special day together ❤️

        </motion.p>

        <motion.p

          className="
          mt-4
          text-center
          text-sm
          text-pink-300
          "

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 10,
            duration: 2,
          }}

        >

          One last surprise is waiting...

        </motion.p>

      </div>

    </motion.main>

  );

}