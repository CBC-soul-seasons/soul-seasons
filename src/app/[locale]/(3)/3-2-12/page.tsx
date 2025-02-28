"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { useBackgroundStore } from "@/store/background";

const Page3_2_12 = () => {
  const t = useTranslations("3-2-12");
  const router = useRouter();
  const [hasClicked, setHasClicked] = useState(false);
  const { setBackground } = useBackgroundStore();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    const startTime = Date.now();

    const id = setInterval(() => {
      const duration = Date.now() - startTime;
      if (duration < 1000) {
        setBackground("/background/3-2-11_3.gif");
      } else if (duration < 2000) {
        setBackground("/background/3-2-11_2.gif");
      } else if (duration < 3000) {
        setBackground("/background/3-2-11_1.gif");
      }
    }, 100);

    setIntervalId(id);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      setBackground("/background/3-2-11_3.gif");
      clearInterval(intervalId);
      setIntervalId(null);
    }

    if (!hasClicked) {
      setHasClicked(true);
      setTimeout(() => {
        router.push("3-3-1");
      }, 8000);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        setBackground("/background/3-2-11_3.gif");
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/3 w-2/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("rainDoll")}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] right-[33%] w-16 h-16 animate-pulse"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: hasClicked ? 0 : 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <button
          className="w-full h-full rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#737373] opacity-50 bg-blend-luminosity shadow-touch cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_12;
