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

As I sit down to write this letter, I realize something beautiful—some people are simply impossible to describe with words. No matter how carefully I choose them, they never seem enough. And somehow, you are one of those rare people.

When I first thought about your birthday, I didn't want to send just another message or buy just another gift. I wanted to create something that would stay with you—a little journey that you could revisit whenever you smile, miss these moments, or simply need a reminder of how truly special you are.

You have this incredible way of making ordinary days feel extraordinary. Your smile has the warmth of sunrise after a long night, your laughter has the power to brighten even the heaviest moments, and your kindness quietly leaves happiness wherever you go. I don't know if you realize it, but the people who have you in their lives are genuinely lucky.

Looking back through all these memories, I couldn't help but smile. Every picture carries a story. Every video holds a moment that deserves to be remembered. Together, they remind me that life becomes beautiful not because of places or things, but because of the people we share it with. And for me, you are one of those people who makes memories feel priceless.

Today is your day.

I hope this new year of your life brings you countless reasons to smile, the courage to chase every dream you've ever had, and the strength to overcome every challenge that comes your way. I hope your heart is always filled with peace, your mind with confidence, and your life with endless happiness.

Never let anyone make you believe you are anything less than extraordinary. You are stronger than you know, kinder than you realize, and more beautiful than words could ever explain—not just because of how you look, but because of the person you are inside.

If, someday, life becomes difficult and the world feels a little too heavy, I hope you remember this simple truth:

"You are loved. You are appreciated. And you matter more than you may ever fully realize."

Thank you for being exactly who you are. Thank you for every smile, every conversation, every memory, and every little moment that made life brighter.

I hope this small surprise made your birthday a little more magical, because creating it for you has been one of the happiest things I've ever done.

So here's to you—to your dreams, your happiness, your beautiful heart, and all the incredible adventures waiting ahead.

May this birthday be only the beginning of the most wonderful chapter of your life.

Happy Birthday, Anushka. ❤️

With all my affection, admiration, and best wishes,

Forever cheering for your happiness,

yours well wisher ❤️`;
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