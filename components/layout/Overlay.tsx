export default function Overlay() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-pink-300/20 via-rose-200/15 to-fuchsia-400/30" />
      <div className="fixed inset-0 -z-10 bg-black/10" />
    </>
  );
}