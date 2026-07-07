"use client";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 -z-30 h-full w-full object-cover"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
}