import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/images/hero-bg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-200/20" />

      {/* Soft blur at bottom */}
      <div className="absolute bottom-0 h-60 w-full bg-gradient-to-t from-pink-100/40 to-transparent" />
    </div>
  );
}