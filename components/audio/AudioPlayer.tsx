"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "./AudioProvider";

export default function AudioPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    playing,
    muted,
    volume,
    track,
  } = useAudio();

  /* ---------------- Track Change ---------------- */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.src = `/audio/music/${track}.mp3`;

    if (playing) {

      audio.play().catch(() => {});

    }

  }, [track, playing]);

  /* ---------------- Volume ---------------- */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;

  }, [volume]);

  /* ---------------- Mute ---------------- */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = muted;

  }, [muted]);

  /* ---------------- Play / Pause ---------------- */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    let fadeInterval: NodeJS.Timeout;

    if (playing) {

      audio.volume = 0;

      audio.play().catch(() => {});

      fadeInterval = setInterval(() => {

        if (audio.volume < volume) {

          audio.volume = Math.min(
            audio.volume + 0.02,
            volume
          );

        } else {

          clearInterval(fadeInterval);

        }

      }, 60);

    } else {

      fadeInterval = setInterval(() => {

        if (audio.volume > 0.02) {

          audio.volume -= 0.02;

        } else {

          audio.pause();

          audio.volume = volume;

          clearInterval(fadeInterval);

        }

      }, 60);

    }

    return () => clearInterval(fadeInterval);

  }, [playing, volume]);

  return (

    <audio
      ref={audioRef}
      loop
      preload="auto"
    />

  );

}