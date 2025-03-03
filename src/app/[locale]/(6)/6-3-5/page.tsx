"use client";
import Bar from "@/components/ui/bar";
import NextButton from "@/components/ui/NextButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useEffect } from "react";
import { UserData } from "@/lib/enum";
import { useLogicCalculation } from "@/lib/logicCalculation/logicCalculation";
import { addUser } from "@/lib/add";

const Scene6_3Page4: React.FC = () => {
  const t = useTranslations("6-3-5");
  const [stressAfterScore, setstressAfterScore] = useState<number>(5);
  const [mouseDown, setMouseDown] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { seasons, chapter } = useLogicCalculation();
  
  useEffect(() => {
    const name = String(localStorage.getItem("name")) ;
    const feelings = Number(localStorage.getItem("stressScore")) ;
    const result =  {"season": seasons, "chapter": chapter} ;
    const feedBack = String(localStorage.getItem("feedbackScore")) ;
    const feelingsAfter = Number(localStorage.getItem("stressAfterScore")) ;
  
    setUserData({ name, feelings, result, feedBack, feelingsAfter });
    console.log("userData", userData);
  }, [stressAfterScore]);
  
  

  const handleClick = async () => {
    if (!userData){
      return;
    } ;
    try {
      if (seasons && chapter) {
        await addUser(userData);
        console.log("added user data", userData);
      }
      else {
        console.error("Error saving user data: seasons and chapter are required");
      }
      
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
              {t("andAt")}
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
          stressScore={stressAfterScore}
          setStressScore={setstressAfterScore}
          setMouseDown={setMouseDown}
          localStorageKey="stressAfterScore"
        />
      </motion.div>
      <motion.div
        className="absolute top-[87%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <NextButton url="6-3-7" disabled={!mouseDown} onClick={handleClick} />
      </motion.div>
    </div>
  );
};

export default Scene6_3Page4;
