"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
FaMusic,
FaVolumeMute,
FaPlay,
FaPause,
} from "react-icons/fa";

import { useAudio } from "./AudioProvider";
import VolumeSlider from "./VolumeSlider";

export default function MusicButton() {

const {
muted,
setMuted,
playing,
setPlaying,
} = useAudio();

const [open, setOpen] = useState(false);

return (

<div className="fixed bottom-6 right-6 z-[9999]">

  <AnimatePresence>

    {open && (

      <motion.div

        initial={{
          opacity: 0,
          y: 15,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          y: 15,
          scale: 0.9,
        }}

        className="
          mb-4
          rounded-2xl
          border
          border-white/15
          bg-white/10
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(255,192,203,0.15)]
          p-4
          w-72
        "

      >

        <h3 className="text-white text-sm mb-4 font-semibold">
          Music Controls
        </h3>

        <div className="flex items-center justify-between mb-4">

          <button
            onClick={() => setPlaying(!playing)}
            className="
              flex
              items-center
              gap-2
              text-white
              text-sm
            "
          >
            {playing ? <FaPause /> : <FaPlay />}
            {playing ? "Pause" : "Play"}
          </button>

          <button
            onClick={() => setMuted(!muted)}
            className="
              flex
              items-center
              gap-2
              text-white
              text-sm
            "
          >
            {muted ? <FaVolumeMute /> : <FaMusic />}
            {muted ? "Muted" : "Sound On"}
          </button>

        </div>

        <p className="text-white/60 text-xs mb-2">
          Volume
        </p>

        <VolumeSlider />

      </motion.div>

    )}

  </AnimatePresence>

  <motion.button

    whileHover={{
      scale: 1.08,
    }}

    whileTap={{
      scale: 0.95,
    }}

    onClick={() => setOpen(!open)}

    className="
      h-14
      w-14
      rounded-full
      bg-white/10
      border
      border-white/20
      backdrop-blur-xl
      shadow-xl
      text-white
      flex
      items-center
      justify-center
    "

  >

    <motion.div

      animate={
        playing
          ? {
              rotate: [0, 15, -15, 0],
            }
          : {}
      }

      transition={{
        repeat: Infinity,
        duration: 2,
      }}

    >

      <FaMusic />

    </motion.div>

  </motion.button>

</div>


);

}
