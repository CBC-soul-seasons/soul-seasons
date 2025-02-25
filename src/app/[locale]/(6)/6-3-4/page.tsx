"use client";
import Bar from "@/components/ui/bar";
import NextButton from "@/components/ui/NextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { addUser } from "@/lib/add";
// import { UserData } from "@/lib/enum";
import { useLogicCalculation } from "@/lib/logicCalculation/logicCalculation";

const Scene6_3Page4: React.FC = () => {
  const t = useTranslations("6-3-4");
  const [feedbackScore, setFeedbackScore] = useState<number>(5);
  const [mouseDown, setMouseDown] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { seasons, chapter } = useLogicCalculation();

  type UserData = {   
    name: string | null;  // Allow null values
    feelings: number;   
    result: string;    
    feedBack: number;
  };
  
  useEffect(() => {
    const name = localStorage.getItem("name") || "";
    const feelings = Number(localStorage.getItem("stressScore")) || 5;
    const result =  `season: ${seasons} | chapter : ${chapter}`;
    const feedBack = Number(localStorage.getItem("feedbackScore")) ?? "";
  
    setUserData({ name, feelings, result, feedBack });
  }, [feedbackScore]);
  
  

  const handleClick = async () => {
    if (!userData){
      return;
    } ;
    try {
      await addUser(userData);
      console.log("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };
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
        <NextButton url="6-3-5" disabled={!mouseDown} onClick={handleClick} />
      </motion.div>
    </div>
  );
};

export default Scene6_3Page4;
