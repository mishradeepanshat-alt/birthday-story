"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function Typewriter({
  text,
  speed = 35,
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);

        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <p className="letter-font whitespace-pre-line text-lg leading-9 text-[#5B3A29]">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}