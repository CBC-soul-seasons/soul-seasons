import { useState, useRef, useCallback } from "react";

const SlideUnlock: React.FC<{ onUnlock: () => void; className?: string }> = ({
  onUnlock,
  className,
}) => {
  const maxValue = 100; // Smoothness level
  const speed = 12; // Sliding back speed
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
    setCurrValue(Math.max(0, Number(e.target.value)));
  };

  const animateHandler = useCallback(() => {
    setCurrValue((prevValue) => {
      const newValue = prevValue - speed;
      if (newValue <= 0) {
        cancelAnimationFrame(rafID);
        return 0;
      }
      rafID = requestAnimationFrame(animateHandler);
      return newValue;
    });
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-[280px] h-[56px] flex items-center justify-start">
        <div className="absolute w-full h-[56px] rounded-full border-2 border-dotted border-white"></div>

        <input
          ref={inputRef}
          type="range"
          value={currValue}
          min={0}
          max={100}
          onMouseDown={handleUnlockStart}
          onTouchStart={handleUnlockStart}
          onMouseUp={handleUnlockEnd}
          onTouchEnd={handleUnlockEnd}
          onChange={handleSliderChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />

        <div
          className="absolute w-[48px] h-[48px] bg-white rounded-full shadow-lg transition-transform duration-100 pointer-events-none"
          style={{
            transform: `translateX(${(currValue / 100) * (280 - 48 - 8)}px)`,
            marginLeft: "4px",
            marginRight: "4px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SlideUnlock;
