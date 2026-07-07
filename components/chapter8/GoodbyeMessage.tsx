"use client";

import { motion } from "framer-motion";

const messages = [
  {
    text: "Thank You ❤️",
    delay: 0,
    className: "hero-font text-6xl md:text-8xl text-white",
  },
  {
    text: "For taking this little journey with me.",
    delay: 2,
    className: "text-2xl md:text-3xl text-pink-100",
  },
  {
    text: "I hope this surprise made you smile...",
    delay: 4,
    className: "text-xl md:text-2xl text-white/90",
  },
  {
    text: "Just like your smile brightens every room you walk into.",
    delay: 6,
    className: "text-xl md:text-2xl text-white/90 max-w-4xl",
  },
  {
    text: "May every dream you dream become reality.",
    delay: 8,
    className: "text-xl md:text-2xl text-pink-100",
  },
  {
    text: "May your life always be filled with happiness, love and endless laughter.",
    delay: 10,
    className: "text-xl md:text-2xl text-white/90 max-w-4xl",
  },
  {
    text: "Keep smiling, keep shining, and never stop being the amazing person you are.",
    delay: 13,
    className: "text-xl md:text-2xl text-yellow-200 max-w-5xl",
  },
  {
    text: "You truly deserve every beautiful thing this world has to offer.",
    delay: 16,
    className: "text-xl md:text-2xl text-pink-100 max-w-5xl",
  },
  {
    text: "Happy Birthday Once Again ❤️",
    delay: 19,
    className: "hero-font text-5xl md:text-7xl text-yellow-300",
  },
  {
    text: "With all my love,",
    delay: 22,
    className: "text-2xl text-white",
  },
  {
    text: "Your well wisher ❤️",
    delay: 24,
    className: "hero-font text-5xl md:text-6xl text-pink-300",
  },
];

export default function GoodbyeMessage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 px-8">

      {messages.map((message, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: message.delay,
            duration: 1.2,
          }}
        >
          <motion.p
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className={message.className}
          >
            {message.text}
          </motion.p>
        </motion.div>

      ))}

    </div>
  );
}