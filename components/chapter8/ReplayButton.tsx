"use client";

import { motion } from "framer-motion";
import PremiumButton from "@/components/ui/PremiumButton";

type Props = {
  onReplay: () => void;
};

export default function ReplayButton({
  onReplay,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 28,
        duration: 1,
      }}
      className="mt-16"
    >
      <PremiumButton onClick={onReplay}>
        ❤️ Replay your Journey ❤️
      </PremiumButton>
    </motion.div>
  );
}