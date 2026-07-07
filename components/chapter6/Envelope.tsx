"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  opened: boolean;
  onClick: () => void;
};

export default function Envelope({
  opened,
  onClick,
}: EnvelopeProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={!opened ? { scale: 1.03, y: -8 } : {}}
      whileTap={!opened ? { scale: 0.98 } : {}}
      animate={{
        y: opened ? -30 : [0, -8, 0],
      }}
      transition={{
        y: opened
          ? { duration: 0.6 }
          : {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
      }}
      className="relative w-[520px] h-[340px] cursor-pointer"
    >
      {/* Shadow */}
      <div className="absolute bottom-0 left-1/2 h-8 w-[320px] -translate-x-1/2 rounded-full bg-black/20 blur-xl" />

      {/* Envelope Body */}
      <div
        className="
        absolute
        inset-0
        rounded-[24px]
        bg-gradient-to-br
        from-[#fffefc]
        via-[#fff7fb]
        to-[#ffeef6]
        border
        border-pink-200
        shadow-[0_25px_70px_rgba(0,0,0,.18)]
        overflow-hidden
      "
      >
        {/* Decorative Border */}

        <div className="absolute inset-4 rounded-2xl border border-pink-100" />

        {/* Bottom Fold */}

        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          h-[170px]
          bg-gradient-to-t
          from-pink-200
          to-pink-100
          clip-envelope
        "
        />

        {/* Top Flap */}

        <motion.div
          animate={{
            rotateX: opened ? -180 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "top",
          }}
          className="
          absolute
          top-0
          left-0
          w-full
          h-[150px]
          bg-gradient-to-b
          from-pink-300
          to-pink-200
          clip-envelope-top
          z-20
        "
        />

        {/* Front Text */}

        {/* Front Address */}

{!opened && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="
      absolute
      left-0
      right-0
      top-[250px]
      z-10
      flex
      flex-col
      items-center
      px-8
      text-center
    "
  >
    

    

    <p className="mt-4 text-lg tracking-wide text-pink-500">
      Break the wax seal
    </p>

    <p className="text-pink-400">
      to reveal your surprise
    </p>
  </motion.div>
)}
      </div>
    </motion.div>
  );
}