"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import NextButton from "@/components/ui/NextButton";
import { Obstacle } from "@/lib/enum";

const Scene3_1_5 = () => {
  const [currentObstacles, setCurrentObstacles] = useState<Obstacle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("3-1-5");

  const handleClick = (obstacleCode: Obstacle) => {
    setCurrentObstacles((prev) => {
      if (prev.includes(obstacleCode)) {
        return prev.filter((o) => o !== obstacleCode);
      } else if (prev.length < 3) {
        return [...prev, obstacleCode];
      }
      return prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("currentObstacles", JSON.stringify(currentObstacles));
  }, [currentObstacles]);

  return (
    <section className="w-full justify-start items-center h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex text-white justify-center items-start sm:mt-[185px] mt-[248px] font-light text-center"
      >
        <p className="text-[18px]">
          {t("title.s1")}
          <br />
          {t("title.s2")}
          <br />
          {t("title.s3")}
          <br />
          {t("title.s4")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" w-full flex flex-col text-white px-2 justify-start items-center sm:mt-[20px] mt-[30px] font-light text-center"
      >
        {/* Display which codes have been chosen (for debug or clarity) */}
        {currentObstacles.map((goal, index) => (
          <p key={index} className="text-[16px]">
            {index + 1}. {t(`p1.${goal}`)}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full w-full mt-[70px] flex justify-center items-start text-center"
      >
        {/* Scrollable container with smooth motion */}
        <div
          ref={containerRef}
          className="flex h-[150px] w-[252px] flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white/25 rounded-lg"
        >
          {Object.values(Obstacle).map((obstacleCode) => {
            const isSelected = currentObstacles.includes(obstacleCode);
            return (
              <div
                key={obstacleCode}
                tabIndex={0}
                className="flex flex-row justify-center items-center w-full h-[60px] snap-start cursor-pointer p-[10px]"
                onClick={() => handleClick(obstacleCode)}
              >
                <img
                  src={
                    isSelected ? "/icons/selected.webp" : "/icons/ei_check.webp"
                  }
                  alt="Checkmark"
                  className={`w-5 h-5 mr-2 ${
                    isSelected ? "opacity-100" : "opacity-25"
                  }`}
                />
                <p
                  className={`font-light text-white ${
                    isSelected ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {t(`p1.${obstacleCode}`)}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-start items-center h-full flex-col mt-10"
      >
        <NextButton url="/3-2-2" disabled={currentObstacles.length < 3} />
      </motion.div>
    </section>
  );
};

export default Scene3_1_5;
