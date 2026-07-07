"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PremiumButton from "@/components/ui/PremiumButton";
import { videos } from "@/data/videos";

type VideosProps = {
  onNext: () => void;
};

export default function Videos({ onNext }: VideosProps) {

  const [current, setCurrent] = useState(0);

  const [playing, setPlaying] = useState(true);

  const [muted, setMuted] = useState(false);

  const [progress, setProgress] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const total = videos.length;

  const currentVideo = videos[current];

  /* ---------------- Progress ---------------- */
useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  setProgress(0);
  setCurrentTime(0);
  setDuration(0);

  const loadedMetadata = () => {
    setDuration(video.duration || 0);
  };

  const updateProgress = () => {
    if (!video.duration) return;

    setCurrentTime(video.currentTime);

    setProgress(
      (video.currentTime / video.duration) * 100
    );
  };

  video.addEventListener("loadedmetadata", loadedMetadata);
  video.addEventListener("timeupdate", updateProgress);

  return () => {
    video.removeEventListener("loadedmetadata", loadedMetadata);
    video.removeEventListener("timeupdate", updateProgress);
  };
}, [current]);

  /* ---------------- Auto Next ---------------- */

  useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  const ended = () => {
    if (current === total - 1) {
      onNext();
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  video.addEventListener("ended", ended);

  return () => {
    video.removeEventListener("ended", ended);
  };
}, [current, total, onNext]);

  /* ---------------- Play Pause ---------------- */

  const togglePlay = () => {

    if (!videoRef.current) return;

    if (videoRef.current.paused) {

      videoRef.current.play();

      setPlaying(true);

    } else {

      videoRef.current.pause();

      setPlaying(false);

    }

  };

  /* ---------------- Mute ---------------- */

  const toggleMute = () => {

    if (!videoRef.current) return;

    videoRef.current.muted = !muted;

    setMuted(!muted);

  };

  /* ---------------- Seek ---------------- */

  const seekVideo = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!videoRef.current) return;

  const value = Number(e.target.value);

  videoRef.current.currentTime = value;

  setCurrentTime(value);
};

  /* ---------------- Fullscreen ---------------- */

  const fullscreen = () => {

    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {

      videoRef.current.requestFullscreen();

    }

  };

  /* ---------------- Previous ---------------- */

  const previous = () => {

    if (current === 0) return;

    setCurrent(current - 1);

  };

  /* ---------------- Next ---------------- */

  const next = () => {

    if (current === total - 1) {

      onNext();

      return;

    }

    setCurrent(current + 1);

  };

  /* ---------------- Keyboard ---------------- */

  useEffect(() => {

    const handle = (e: KeyboardEvent) => {

      if (e.code === "Space") {

        e.preventDefault();

        togglePlay();

      }

      if (e.key === "ArrowRight") {

        next();

      }

      if (e.key === "ArrowLeft") {

        previous();

      }

    };

    window.addEventListener("keydown", handle);

    return () => {

      window.removeEventListener("keydown", handle);

    };

  }, [current, playing]);

  const formatTime = (time: number) => {

    if (!time) return "00:00";

    const mins = Math.floor(time / 60);

    const secs = Math.floor(time % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;

  };
    return (
    <motion.main
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-8
      py-20
      overflow-hidden
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        h-[900px]
        w-[900px]
        rounded-full
        bg-pink-300/20
        blur-[120px]
        "
      />

      <div className="relative z-10 w-full max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-10 text-center"
        >

          <p
            className="
            uppercase
            tracking-[8px]
            text-sm
            text-pink-500
            "
          >
            Chapter Five
          </p>

          <h1
            className="
            hero-font
            mt-4
            text-6xl
            text-pink-700
            "
          >
            Beautiful Moments ❤️
          </h1>

          <p
            className="
            mt-4
            text-xl
            text-[#6A4A57]
            "
          >
            Some memories are better watched than described...
          </p>

        </motion.div>

        <AnimatePresence mode="wait">

          <motion.div

            key={current}

            initial={{
              opacity: 0,
              scale: .95,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: .95,
              y: -40,
            }}

            transition={{
              duration: .8,
            }}

            className="
            rounded-[36px]
            border
            border-white/30
            bg-white/20
            backdrop-blur-2xl
            shadow-[0_35px_90px_rgba(0,0,0,.18)]
            overflow-hidden
            "
          >

            <div
              className="
              grid
              lg:grid-cols-2
              gap-12
              p-10
              "
            >

              {/* LEFT */}

              <div className="flex justify-center">

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  shadow-2xl
                  "
                >
<video
  key={current}
  ref={videoRef}
  controls={false}
  controlsList="nodownload"
  preload="metadata"
  playsInline
  autoPlay
  muted={muted}

onLoadedMetadata={(e) => {
    setDuration(e.currentTarget.duration || 0);
  }}

  onTimeUpdate={(e) => {
    const video = e.currentTarget;

    setCurrentTime(video.currentTime);

    setDuration(video.duration || 0);

    setProgress(
      video.duration
        ? (video.currentTime / video.duration) * 100
        : 0
    );
  }}

  onClick={togglePlay}
  className="
    h-[720px]
    aspect-[9/16]
    object-cover
    bg-black
    cursor-pointer
    rounded-[34px]
  "
>
  <source
    src={currentVideo.src}
    type="video/mp4"
  />
</video>

                  {/* Play Overlay */}

                  {!playing && (

                    <motion.div

                      initial={{ opacity: 0 }}

                      animate={{ opacity: 1 }}

                      className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/20
                      "

                    >

                      <button

                        onClick={togglePlay}

                        className="
                        h-24
                        w-24
                        rounded-full
                        bg-white/30
                        backdrop-blur-xl
                        text-5xl
                        "

                      >

                        ▶

                      </button>

                    </motion.div>

                  )}

                </div>

              </div>

              {/* RIGHT */}

              <div
                className="
                flex
                flex-col
                justify-center
                "
              >

                <p
                  className="
                  uppercase
                  tracking-[8px]
                  text-pink-500
                  text-sm
                  "
                >
                  Video {current + 1}
                </p>

                <h2
                  className="
                  hero-font
                  mt-5
                  text-5xl
                  text-pink-700
                  "
                >
                  {currentVideo.title}
                </h2>

                <p
                  className="
                  mt-8
                  text-2xl
                  leading-10
                  text-[#5A3E4B]
                  letter-font
                  "
                >
                  {currentVideo.caption}
                </p>

                {/* Progress */}

                {/* ---------------- Progress ---------------- */}

<div className="mt-14">

  {/* Time */}

  <div
    className="
      mb-3
      flex
      justify-between
      text-sm
      font-medium
      text-pink-600
    "
  >
    <span>
      {formatTime(currentTime)}
    </span>

    <span>
      {formatTime(duration)}
    </span>
  </div>

  {/* Slider */}

  <input
    type="range"
    min={0}
    max={duration || 0}
    step={0.1}
    value={currentTime}
    onChange={(e) => {
      const value = Number(e.target.value);

      if (!videoRef.current) return;

      videoRef.current.currentTime = value;

      setCurrentTime(value);

      setProgress(
        duration
          ? (value / duration) * 100
          : 0
      );
    }}
    className="
      w-full
      cursor-pointer
      accent-pink-500
    "
  />

</div>
                                {/* Controls */}

                <div
                  className="
                  mt-10
                  flex
                  items-center
                  gap-4
                  "
                >
                  <PremiumButton onClick={togglePlay}>
                    {playing ? "⏸ Pause" : "▶ Play"}
                  </PremiumButton>

                  <PremiumButton onClick={toggleMute}>
                    {muted ? "🔇 Unmute" : "🔊 Mute"}
                  </PremiumButton>

                  <PremiumButton onClick={fullscreen}>
                    ⛶ Fullscreen
                  </PremiumButton>
                </div>

                {/* Progress Counter */}

                <div
                  className="
                  mt-12
                  flex
                  items-center
                  justify-between
                  "
                >
                  <span className="text-pink-500 font-medium">
                    {current + 1} / {total}
                  </span>

                  <div className="flex gap-2">

                    {videos.map((_, index) => (

                      <motion.div
                        key={index}
                        animate={{
                          width: index === current ? 30 : 10,
                          opacity: index === current ? 1 : .35,
                        }}
                        className="
                        h-2
                        rounded-full
                        bg-pink-500
                        "
                      />

                    ))}

                  </div>

                </div>

                {/* Navigation */}

                <div
                  className="
                  mt-14
                  flex
                  justify-between
                  "
                >
                  <PremiumButton
                    onClick={previous}
                    disabled={current === 0}
                  >
                    ← Previous
                  </PremiumButton>

                  <PremiumButton
                    onClick={next}
                  >
                    {current === total - 1
                      ? "Continue ❤️"
                      : "Next →"}
                  </PremiumButton>

                </div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </motion.main>

  );

}