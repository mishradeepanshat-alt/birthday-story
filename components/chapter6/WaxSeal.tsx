"use client";

import { motion, AnimatePresence } from "framer-motion";

type WaxSealProps = {
broken: boolean;
onBreak: () => void;
};

export default function WaxSeal({
broken,
onBreak,
}: WaxSealProps) {
return ( <AnimatePresence>
{!broken && (
<motion.button
onClick={onBreak}
initial={{ scale: 0 }}
animate={{
scale: [1, 1.05, 1],
}}
exit={{
scale: 0,
rotate: 180,
opacity: 0,
}}
transition={{
scale: {
repeat: Infinity,
duration: 2,
},
duration: 0.45,
}}
whileHover={{
scale: 1.1,
boxShadow: "0 0 35px rgba(255,90,120,.45)",
}}
whileTap={{
scale: 0.92,
}}
className="
absolute
left-1/2
top-[58%]
-translate-x-1/2
-translate-y-1/2
z-40
h-24
w-24
rounded-full
cursor-pointer
"
>
{/* Outer Ring */} <div
         className="
           absolute
           inset-0
           rounded-full
           bg-gradient-to-br
           from-red-500
           via-red-700
           to-red-900
           shadow-[0_15px_40px_rgba(120,0,0,.45)]
         "
       />

      {/* Inner Shine */}
      <div
        className="
          absolute
          inset-[5px]
          rounded-full
          bg-gradient-to-br
          from-red-400
          via-red-600
          to-red-800
        "
      />

      {/* Highlight */}
      <div
        className="
          absolute
          top-3
          left-4
          h-4
          w-8
          rounded-full
          bg-white/30
          blur-sm
        "
      />

      {/* Heart */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl drop-shadow-md">
          🤍
        </span>
      </div>
    </motion.button>
  )}
</AnimatePresence>

);
}
