import { useState, useRef, useCallback } from "react";

const SlideUnlock: React.FC<{ onUnlock: () => void; className?: string }> = ({
  onUnlock,
  className,
}) => {
  const maxValue = 100; // the higher, the smoother when dragging
  const speed = 12; // speed for sliding back
  const [currValue, setCurrValue] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  let rafID: number;

  const handleUnlockStart = useCallback(() => {
    if (inputRef.current) {
      cancelAnimationFrame(rafID);
      setCurrValue(Number(inputRef.current.value));
    }
  }, []);

  const handleUnlockEnd = useCallback(() => {
    if (inputRef.current) {
      const value = Number(inputRef.current.value);
      setCurrValue(value);

      if (value >= maxValue) {
        onUnlock();
      } else {
        rafID = requestAnimationFrame(animateHandler);
      }
    }
  }, [onUnlock]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrValue(Number(e.target.value));
  };

  const animateHandler = useCallback(() => {
    setCurrValue((prevValue) => {
      if (prevValue > -1) {
        rafID = requestAnimationFrame(animateHandler);
      }
      return prevValue - speed;
    });
  }, []);

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ${className}`}
    >
      <input
        ref={inputRef}
        type="range"
        value={currValue}
        min="0"
        max={100}
        onMouseDown={handleUnlockStart}
        onMouseUp={handleUnlockEnd}
        onTouchEnd={handleUnlockEnd}
        onChange={handleSliderChange}
        className="w-40 appearance-none focus:outline-none 
                  [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:h-4 
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:bg-gray-500 [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                  [&::-webkit-slider-thumb]:cursor-grab transition-transform ease-out duration-100 
                  [&::-webkit-slider-thumb]:transform [&::-webkit-slider-thumb]:translate-y-[-3px] opacity-50"
      />
    </div>
  );
};

export default SlideUnlock;
