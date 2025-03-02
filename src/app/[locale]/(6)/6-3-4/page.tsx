"use client";
import Bar from "@/components/ui/bar";
import NextButton from "@/components/ui/NextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";


const Scene6_3Page4: React.FC = () => {
  const t = useTranslations("6-3-4");
  const [feedbackScore, setFeedbackScore] = useState<number>(5);
  const [mouseDown, setMouseDown] = useState(false);



  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute top-[61%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex h-auto w-full px-6">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow-text leading-[24.68px]">
              {t("howDo")}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[75.5%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Bar
          stressScore={feedbackScore}
          setStressScore={setFeedbackScore}
          setMouseDown={setMouseDown}
          localStorageKey="feedbackScore"
        />
      </motion.div>
      <motion.div
        className="absolute top-[87%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <NextButton url="6-3-5" disabled={!mouseDown} />
      </motion.div>
    </div>
  );
};

export default Scene6_3Page4;
