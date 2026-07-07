"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Envelope from "./Envelope";
import WaxSeal from "./WaxSeal";
import LetterPaper from "./LetterPaper";
import useSound from "@/hooks/useSound";

type Props = {
  onNext: () => void;
};

export default function EnvelopeScene({
  onNext,
}: Props) {
  
  const [broken, setBroken] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [fadeScene, setFadeScene] = useState(false);
  const { play } = useSound();

  const breakSeal = () => {
    if (broken) return;

    // Wax seal breaks
    play("paper/seal", 0.45);

    setBroken(true);

    // Envelope opens
    setTimeout(() => {
      play("paper/envelope", 0.45);
      setOpened(true);
    }, 450);

    // Letter slides out
    setTimeout(() => {
      play("paper/unfold", 0.4);
      setShowPaper(true);
    }, 1200);

    // Fade whole scene
    setTimeout(() => {
      setFadeScene(true);
    }, 3200);
  };

  useEffect(() => {
    if (!fadeScene) return;

    const timer = setTimeout(() => {
      onNext();
    }, 1000);

    return () => clearTimeout(timer);
  }, [fadeScene, onNext]);

  return (
    <motion.main
      animate={{
        opacity: fadeScene ? 0 : 1,
        scale: fadeScene ? 1.04 : 1,
        filter: fadeScene
          ? "blur(12px)"
          : "blur(0px)",
      }}
      transition={{
        duration: 1,
      }}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          opacity: broken ? 0.55 : 0.25,
          scale: broken ? 1.25 : 1,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-pink-300/20
          blur-[120px]
        "
      />

      <div className="relative">

        <LetterPaper
          visible={showPaper}
        />

        <Envelope
          opened={opened}
          onClick={() => {}}
        />

        <AnimatePresence>

          {!broken && (

            <WaxSeal
              broken={broken}
              onBreak={breakSeal}
            />

          )}

        </AnimatePresence>

      </div>

      {/* Bottom Hint */}

      {!broken && (

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.8,
          }}
          className="
            absolute
            bottom-20
            text-center
            text-pink-500
            tracking-widest
            uppercase
            text-sm
          "
        >
          Click the wax seal ❤️
        </motion.p>

      )}

    </motion.main>
  );
}