"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

import PremiumButton from "@/components/ui/PremiumButton";
import useSound from "@/hooks/useSound";

type FinalLetterProps = {
  onNext: () =>void;
};

export default function FinalLetter({
  onNext,
}: FinalLetterProps) {

  const [finished,setFinished]=useState(false);
  const { play } = useSound();

  const letter=`My Dearest Anushka ❤️,

Happy Birthday.

As I sit down to write this letter, 

yours truly ❤️`;

useEffect(() => {
  play("paper/unfold", 0.45);

  const timer = setTimeout(() => {
    play("paper/page", 0.25);
  }, 600);

  return () => clearTimeout(timer);
}, [play]);

  return (

    <main
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-20
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        h-[700px]
        w-[700px]
        rounded-full
        bg-pink-300/20
        blur-[120px]
        "
      />

      {/* Letter */}

      <motion.div

        initial={{
          y:80,
          opacity:0,
          scale:.92,
        }}

        animate={{
          y:0,
          opacity:1,
          scale:1,
        }}

        transition={{
          duration:1,
        }}

        className="
        relative
        w-full
        max-w-4xl

        rounded-[32px]

        border
        border-[#ead8b0]

        bg-gradient-to-b
        from-[#fffdf8]
        via-[#fff8ec]
        to-[#fff2da]

        shadow-[0_40px_120px_rgba(0,0,0,.18)]

        p-14
        overflow-hidden
        "

      >

        {/* Paper Texture */}

        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:20px_20px]" />

        {/* Title */}

        <h1
          className="
          script-font
          text-center
          text-6xl
          text-pink-700
          mb-10
          "
        >
          A Letter From My Heart 💌
        </h1>

        {/* Divider */}

        <div className="mx-auto mb-10 h-px w-72 bg-pink-200"/>

        {/* Letter */}

        <div
          className="
          relative
          whitespace-pre-line
          letter-font
          text-[22px]
          leading-10
          text-[#6b4a3b]
          "
        >

          {!finished ? (

            <TypeAnimation

              sequence={[
                () => {
                  play("paper/page", 0.25);
                },
                letter,
                () => {
                  setFinished(true);
                }
              ]}

              wrapper="div"

              speed={70}

              cursor={true}

              repeat={0}

            />

          ) : (

            <div>{letter}</div>

          )}

        </div>

        {finished &&(

          <motion.div

            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              duration:.8,
            }}

            className="mt-16 flex justify-center"

          >

            <PremiumButton
              onClick={onNext}
            >
              One Last Surprise ❤️
            </PremiumButton>

          </motion.div>

        )}

      </motion.div>

    </main>

  );

}