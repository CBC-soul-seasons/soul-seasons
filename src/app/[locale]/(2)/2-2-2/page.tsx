"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { getPotImages } from "@/lib/pots-config";

const Scene2_2Page2 = () => {
  const t = useTranslations("2-2-2");
  const [clicks, setClicks] = useState(0);
  const [glowingPots, setGlowingPots] = useState<
    Array<{ index: number; name: string }>
  >([]); // Store glowing pots with name
  const locale = useLocale();
  const router = useRouter();

  const { potImagesleft: potImagesLeft, potImagesright: potImagesRight } =
    getPotImages(t);
  useEffect(() => {
    localStorage.setItem("motivationGoal", JSON.stringify(glowingPots));
  }, [glowingPots]);

  const handleClick = (index: number, name: string) => {
    setGlowingPots((prev) => {
      const existingIndex = prev.findIndex((pot) => pot.index === index);
      if (existingIndex >= 0) {
        // If pot is already glowing, remove it
        setClicks(() => clicks - 1);

        return prev.filter((_, i) => i !== existingIndex);
      } else {
        // If pot is not glowing, add it
        if (clicks < 3) {
          setClicks(() => clicks + 1);
          return [...prev, { index, name }];
        }
      }
      return prev;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <section
        className="relative w-full h-lvh flex flex-col justify-center items-center overflow-hidden overflow-y-auto"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Christmas Tree */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="absolute bottom-[40px] w-full h-full flex justify-center items-center"
        >
          <img
            src="/img/motivation/christmas-tree-1.png"
            alt="Christmas Tree"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="font-light flex text-white flex-col justify-center items-center w-full mt-[120px] text-center"
        >
          <p>
            {t("p1.s1")}
            <br />
            {t("p1.s2")}
            <br />
            {t("p1.s3")}
          </p>
        </motion.div>

        {/* Click Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-2 text-white text-center"
        >
          <p>{`${clicks}/3`}</p>
        </motion.div>

        {/* Pot Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative flex justify-center h-full w-full mx-auto gap-3"
        >
          {/* Left Column */}
          <div className="flex flex-col items-center">
            {potImagesLeft.map((pot, index) => {
              const isGlowing = glowingPots.some(
                (glow) => glow.index === index
              );

              return (
                <div
                  key={index}
                  className={
                    index === 2 || index === 1
                      ? `relative  right-[50px] flex flex-col h-[120px] items-center gap-5`
                      : `relative flex flex-col h-[120px] items-center gap-5`
                  }
                  onClick={() => handleClick(index, pot.motivation)}
                >
                  <img
                    src={isGlowing ? pot.glow : pot.src}
                    alt={`${pot.label} Pot`}
                    className="w-auto h-[120px]"
                  />

                  {/* White circle indicator */}
                  {isGlowing && (
                    <div className="text-center rounded-[100%] absolute bg-white w-[18px] h-[18px] bottom-8 left-16">
                      <p className=" text-[15px]">
                        {glowingPots.findIndex((glow) => glow.index === index) +
                          1}
                      </p>
                    </div>
                  )}

                  <p className="text-right mt-2 relative bottom-[50px] font-bold text-xs text-white text-center">
                    {pot.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            {potImagesRight.map((pot, index) => {
              const adjustedIndex = index + potImagesLeft.length; // Correctly offset right column indices

              const isGlowing = glowingPots.some(
                (glow) => glow.index === adjustedIndex
              );

              return (
                <div
                  key={adjustedIndex}
                  className={
                    index === 2 || index === 1
                      ? `relative  left-[50px] flex flex-col h-[120px] items-center gap-5`
                      : `relative flex flex-col h-[120px] items-center gap-5`
                  }
                  onClick={() => handleClick(adjustedIndex, pot.motivation)}
                >
                  <img
                    src={isGlowing ? pot.glow : pot.src}
                    alt={`${pot.label} Pot`}
                    className="w-auto h-[120px]"
                  />

                  {/* White circle indicator */}
                  {isGlowing && (
                    <div className="text-center rounded-[100%] absolute bg-white w-[18px] h-[18px] bottom-8 left-16">
                      <p className=" text-[15px]">
                        {glowingPots.findIndex(
                          (glow) => glow.index === adjustedIndex
                        ) + 1}
                      </p>
                    </div>
                  )}

                  <p className="mt-2 relative bottom-[50px] font-bold text-xs text-white text-center">
                    {pot.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="relative flex justify-center items-center h-[300px] w-[300px] mx-auto"
        >
          <div className="flex justify-center w-full">
            <button
              className={`font-bold ${clicks === 3 ? "bg-primaryblue" : "bg-primaryGrey"} w-[173px] h-[55px] rounded-lg text-white font-bold`}
              onClick={() => clicks === 3 && router.push(`/${locale}/2-2-4`)}
            >
              {t("btn")}
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Scene2_2Page2;
