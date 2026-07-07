"use client";

import { useRef } from "react";

export default function useSound() {
  const sounds = useRef<Map<string, HTMLAudioElement>>(new Map());

  const play = (
    name: string,
    volume: number = 0.5
  ) => {
    let audio = sounds.current.get(name);

    if (!audio) {
      audio = new Audio(`/audio/${name}.mp3`);
      sounds.current.set(name, audio);
    }

    audio.currentTime = 0;
    audio.volume = volume;

    audio.play().catch(() => {});
  };

  return { play };
}