"use client";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

interface SlideUnlockProps {
  nextPage: string;
  className?: string;
}

const SlideUnlock: React.FC<SlideUnlockProps> = ({ nextPage, className }) => {
  const router = useRouter();
  const locale = useLocale();
  const maxValue = 150; // The higher, the smoother dragging
  const speed = 12; // Slide-back speed
  const [currValue, setCurrValue] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  let rafID: number;

  // Start dragging
  const handleUnlockStart = useCallback(() => {
    if (inputRef.current) {
      cancelAnimationFrame(rafID);
      setCurrValue(Number(inputRef.current.value));
    }
  }, []);

  // End dragging
  const handleUnlockEnd = useCallback(() => {
    if (inputRef.current) {
      const value = Number(inputRef.current.value);
      setCurrValue(value);

      if (value >= maxValue) {
        successHandler();
      } else {
        rafID = requestAnimationFrame(animateHandler);
      }
    }
  }, []);

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrValue(Math.max(0, Number(e.target.value)));
  };

  // Animate slider rollback if not fully dragged
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

  // Successful unlock
  const successHandler = () => {
    const fullPath = `/${locale}${nextPage}`;
    router.push(fullPath);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 1 } }}
      className={`flex flex-col items-center ${className}`}
    >
      <div className="relative w-[280px] h-[56px] flex items-center justify-start">
        {/* Dotted Border */}
        <div className="absolute w-full h-[56px] rounded-full border-2 border-dotted border-white"></div>

        {/* Hidden Input Range */}
        <input
          ref={inputRef}
          type="range"
          value={currValue}
          min={0}
          max={maxValue}
          onMouseDown={handleUnlockStart}
          onTouchStart={handleUnlockStart}
          onMouseUp={handleUnlockEnd}
          onTouchEnd={handleUnlockEnd}
          onChange={handleSliderChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />

        {/* Draggable Slider Button */}
        <div
          className="absolute w-[48px] h-[48px] bg-white rounded-full shadow-lg transition-transform duration-100 pointer-events-none"
          style={{
            transform: `translateX(${(currValue / maxValue) * (280 - 48 - 8)}px)`,
            marginLeft: "4px",
            marginRight: "4px",
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default SlideUnlock;
