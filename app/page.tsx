"use client";

import { useEffect, useState } from "react";
import { useAudio } from "@/components/audio/AudioProvider";

import Hero from "@/components/chapter1/Hero";
import Invitation from "@/components/chapter2/Invitation";
import Letter from "@/components/chapter3/Letter";
import Memories from "@/components/chapter4/Memories";
import Videos from "@/components/chapter5/Videos";
import EnvelopeScene from "@/components/chapter6/EnvelopeScene";
import FinalLetter from "@/components/chapter6/FinalLetter";
import Celebration from "@/components/chapter7/Celebration";
import Ending from "@/components/chapter8/Ending";

import Background from "@/components/layout/Background";
import AuroraGlow from "@/components/effects/AuroraGlow";
import Overlay from "@/components/layout/Overlay";
import Clouds from "@/components/layout/Clouds";
import FloatingHearts from "@/components/layout/FloatingHearts";
import SceneTransition from "@/components/layout/SceneTransition";
import CursorGlow from "@/components/effects/CursorGlow";

import IntroProvider from "@/components/intro/IntroProvider";


import AudioProvider from "@/components/audio/AudioProvider";
import AudioPlayer from "@/components/audio/AudioPlayer";
import MusicButton from "@/components/audio/MusicButton";

function StoryApp() {
  const [chapter, setChapter] = useState(1);
  const { playTrack } = useAudio();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
        
  }, [chapter]);
  
  useEffect(() => {
    if (chapter <= 5) {
      playTrack("intro");
    } else if (chapter <= 7) {
      playTrack("letter");
    } else {
      playTrack("ending");
    }
  }, [chapter, playTrack]);

  return (
    <>
      <MusicButton />

      <Background />
      <AuroraGlow />
      <Overlay />
      <Clouds />
      <FloatingHearts />

      <SceneTransition sceneKey={chapter}>
        {chapter === 1 && (
          <Hero onNext={() => setChapter(2)} />
        )}

        {chapter === 2 && (
          <Invitation onNext={() => setChapter(3)} />
        )}

        {chapter === 3 && (
          <Letter onNext={() => setChapter(4)} />
        )}

        {chapter === 4 && (
          <Memories onNext={() => setChapter(5)} />
        )}

        {chapter === 5 && (
          <Videos onNext={() => setChapter(6)} />
        )}

        {chapter === 6 && (
          <EnvelopeScene onNext={() => setChapter(7)} />
        )}

        {chapter === 7 && (
          <FinalLetter onNext={() => setChapter(8)} />
        )}

        {chapter === 8 && (
          <Celebration onReplay={() => setChapter(9)} />
        )}
      
        {chapter === 9 && (
          <Ending onReplay={() => setChapter(1)} />
        )}
      </SceneTransition>
    </>
  );
}

export default function Home() {

  return (
    <AudioProvider>
       <AudioPlayer />
       <CursorGlow />
      <IntroProvider>
        <StoryApp />
      </IntroProvider>

    </AudioProvider>
  );
}