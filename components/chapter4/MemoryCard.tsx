"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Memory = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  caption: string;
};

type Props = {
  memory: Memory;
};

export default function MemoryCard({ memory }: Props) {
  return (
    <motion.div
      key={memory.id}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
        y: -40,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto w-full max-w-6xl"
    >
      <div
        className="
        rounded-[36px]
        border
        border-white/30
        bg-white/20
        backdrop-blur-2xl
        shadow-[0_35px_90px_rgba(0,0,0,.18)]
        overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="relative h-[650px]">

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative h-full w-full"
            >
              <Image
                src={memory.image}
                alt={memory.title}
                fill
                priority={memory.id === 1}
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-all
                  duration-700
                "
              />
            </motion.div>

            {/* Premium Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* RIGHT CONTENT */}

          <div
            className="
            flex
            flex-col
            justify-center
            px-14
            py-16
            "
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="
                uppercase
                tracking-[8px]
                text-pink-500
                text-sm
              "
            >
              Beautiful Memory
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              className="
                mt-5
                hero-font
                text-6xl
                text-pink-700
              "
            >
              {memory.title}
            </motion.h2>

            {memory.subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .5 }}
                className="
                  mt-4
                  text-xl
                  text-pink-500
                "
              >
                {memory.subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: .6,
              }}
              className="
                mt-8
                h-px
                origin-left
                bg-pink-200
              "
            />

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .8,
              }}
              className="
                mt-10
                text-2xl
                leading-10
                text-[#5A3E4B]
                letter-font
              "
            >
              {memory.caption}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="
                mt-14
                flex
                items-center
                gap-4
              "
            >
              <div className="h-px w-20 bg-pink-300" />

              <p className="script-font text-3xl text-pink-500">
                Anushka ❤️
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}