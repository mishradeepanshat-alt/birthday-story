"use client";

import PremiumButton from "@/components/ui/PremiumButton";

type Props = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Navigation({
  current,
  total,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div
      className="
      mt-10
      flex
      items-center
      justify-center
      gap-6
      "
    >
      <PremiumButton
        onClick={onPrevious}
        disabled={current === 0}
      >
        ← Previous
      </PremiumButton>

      <PremiumButton
        onClick={onNext}
      >
        {current === total - 1
          ? "Continue ❤️"
          : "Next →"}
      </PremiumButton>
    </div>
  );
}