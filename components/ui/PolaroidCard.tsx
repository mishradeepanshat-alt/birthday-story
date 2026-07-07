"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  caption: string;
  rotation?: number;
};

export default function PolaroidCard({
  src,
  caption,
  rotation = 0,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{
        rotate: `${rotation}deg`,
      }}
      className="
      relative
      bg-white
      rounded-md
      shadow-2xl
      p-4
      w-[300px]
      "
    >
      {/* Tape */}

      <div
        className="
        absolute
        top-[-14px]
        left-1/2
        -translate-x-1/2
        w-28
        h-8
        rotate-[-3deg]
        rounded-sm
        bg-yellow-100/70
        backdrop-blur-md
        shadow
        "
      />

      <Image
        src={src}
        alt={caption}
        width={400}
        height={500}
        className="
        rounded-sm
        object-cover
        h-[360px]
        w-full
        "
      />

      <p
        className="
        script-font
        text-3xl
        text-center
        mt-5
        text-gray-700
        "
      >
        {caption}
      </p>
    </motion.div>
  );
}