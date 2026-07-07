"use client";

import { AnimatePresence, motion } from "framer-motion";

type SceneTransitionProps = {
  sceneKey: number;
  children: React.ReactNode;
};

export default function SceneTransition({
  sceneKey,
  children,
}: SceneTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        initial={{
          opacity: 0,
          scale: 1.06,
          filter: "blur(18px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          filter: "blur(18px)",
        }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}