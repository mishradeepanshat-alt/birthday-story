"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AudioContextType = {
  playing: boolean;
  muted: boolean;
  volume: number;
  track: string;

  setPlaying: (value: boolean) => void;
  setMuted: (value: boolean) => void;
  setVolume: (value: number) => void;

  playTrack: (track: string) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error(
      "useAudio must be used inside AudioProvider"
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export default function AudioProvider({
  children,
}: Props) {

  const [playing, setPlaying] = useState(false);

  const [muted, setMuted] = useState(false);

  const [volume, setVolume] = useState(0.4);

  const [track, setTrack] = useState("intro");

  const playTrack = (newTrack: string) => {
    setTrack(newTrack);
  };

  useEffect(() => {

    const savedVolume =
      localStorage.getItem("music-volume");

    const savedMuted =
      localStorage.getItem("music-muted");

    if (savedVolume) {
      setVolume(Number(savedVolume));
    }

    if (savedMuted) {
      setMuted(savedMuted === "true");
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "music-volume",
      volume.toString()
    );

  }, [volume]);

  useEffect(() => {

    localStorage.setItem(
      "music-muted",
      muted.toString()
    );

  }, [muted]);

  return (
    <AudioContext.Provider
      value={{
        playing,
        muted,
        volume,
        track,

        setPlaying,
        setMuted,
        setVolume,

        playTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}