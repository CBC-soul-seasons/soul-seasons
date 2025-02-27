"use client";
import { useEffect } from "react";
import Marker from "./marker";

interface BarProps {
  stressScore: number;
  localStorageKey?: string;
  setStressScore?: (score: number) => void;
  setMouseDown?: (mouseDown: boolean) => void;
  showLabel?: boolean;
}

const Bar: React.FC<BarProps> = ({
  stressScore,
  localStorageKey = "stressScore",
  setStressScore,
  setMouseDown,
  showLabel = true,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setStressScore) {
      setStressScore(Number(e.target.value));
    }
    if (setMouseDown) {
      setMouseDown(true);
    }
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, stressScore.toString());
  }, [stressScore]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col items-center justify-center relative ">
        {/* Bubble */}
        {showLabel && (
          <div
            className="absolute -top-12 rounded-full"
            style={{
              left: `calc(${stressScore * 10}% - 14px)`, // Adjust position dynamically
            }}
          >
            <Marker stressScore={stressScore} />
          </div>
        )}
        <input
          type="range"
          min="1"
          max="10"
          name="score"
          className="w-[265px] h-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] custom-range rounded-xl"
          value={stressScore}
          style={{
            background: `linear-gradient(to right, #182649 ${stressScore * 10}%, #ffffff ${
              stressScore * 10
            }%)`,
          }}
          onChange={handleInputChange}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between text-lg font-light text-white">
          <span>1</span>
          <span>10</span>
        </div>
      )}
    </div>
  );
};

export default Bar;
