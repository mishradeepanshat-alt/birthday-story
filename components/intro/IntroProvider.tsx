"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./LoadingScreen";
import WelcomeScreen from "./WelcomeScreen";

import { useAudio } from "@/components/audio/AudioProvider";

type IntroStage = "loading" | "welcome" | "journey";

type IntroProviderProps = {
  children: React.ReactNode;
};

export default function IntroProvider({
  children,
}: IntroProviderProps) {
  const [stage, setStage] = useState<IntroStage>("loading");

  const { setPlaying } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const beginJourney = () => {
    // Start background music
    setPlaying(true);

    // Transition to the website
    setStage("journey");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === "loading" && (
          <LoadingScreen key="loading" />
        )}

        {stage === "welcome" && (
          <WelcomeScreen
            key="welcome"
            onBegin={beginJourney}
          />
        )}
      </AnimatePresence>

      {stage === "journey" && children}
    </>
  );
}