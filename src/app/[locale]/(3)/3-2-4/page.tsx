"use client";

import { motion } from "framer-motion";
import { useBackgroundStore } from "@/store/background";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Page3_2_4 = () => {
  const { setBackground } = useBackgroundStore();
  const router = useRouter(); // Initialize router
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [soFarBGNum, setSoFarBGNum] = useState<0 | 1 | 2>(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isTransparent, setIsTransparent] = useState(false);
  const startTime = useRef(0);
  const stopWatchForAnimation = useRef(0);

  const bgOrder = {
    0: "/background/3-2-11_1.gif",
    1: "/background/3-2-11_2.gif",
    2: "/background/3-2-11_3.gif",
  };

  const nextBG = () => {
    setSoFarBGNum((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
  };

  const handleMouseDown = () => {
    setIsTransparent(true);

    localStorage.setItem("speed", "6");
    startTime.current = Date.now();
    stopWatchForAnimation.current = Date.now();
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const id = setInterval(() => {
      const duration = Date.now() - stopWatchForAnimation.current;
      if (duration > 2000) {
        nextBG();
        stopWatchForAnimation.current = Date.now();
      }
    }, 100);

    setIntervalId(id);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const seconds = (Date.now() - startTime.current) / 1000;
    localStorage.setItem("speed", String(seconds));

    if (soFarBGNum === 0) {
      const id1 = setTimeout(() => {
        setSoFarBGNum((prev) => (prev === 0 ? 1 : prev));

        const id2 = setTimeout(() => {
          setSoFarBGNum((prev) => (prev === 1 ? 2 : prev));
        }, 1000);

        setTimeoutId(id2);
      }, 1000);

      setTimeoutId(id1);
    } else if (soFarBGNum === 1) {
      const id = setTimeout(() => {
        setSoFarBGNum((prev) => (prev === 1 ? 2 : prev));
      }, 1000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    setBackground(bgOrder[soFarBGNum]);

    if (soFarBGNum === 2) {
      setTimeout(() => {
        router.push("3-2-6");
      }, 800);
    }
  }, [soFarBGNum, router]);

  useEffect(() => {
    return () => {
      intervalId && clearInterval(intervalId);
      timeoutId && clearTimeout(timeoutId);
    };
  }, [intervalId, timeoutId]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="absolute bottom-[20%] right-[20%] w-16 h-16 animate-pulse"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#737373] opacity-50 bg-blend-luminosity shadow-touch cursor-pointer"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isTransparent ? 0 : 0.5 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_4;
