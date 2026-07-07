"use client";

import { useAudio } from "./AudioProvider";

export default function VolumeSlider() {
  const { volume, setVolume } = useAudio();

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(e) => setVolume(Number(e.target.value))}
      className="
        w-28
        accent-pink-400
        cursor-pointer
      "
    />
  );
}