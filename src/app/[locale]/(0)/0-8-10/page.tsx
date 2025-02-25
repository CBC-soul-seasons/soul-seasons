"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const Page0_8_10 = () => {
  const t = useTranslations("0-8-10");
  const [fadeStage, setFadeStage] = useState(0);

  useEffect(() => {
    const dimTimer = setTimeout(() => {
      setFadeStage(1);
    }, 2000);

    const disappearTimer = setTimeout(() => {
      setFadeStage(2);
    }, 4000);

    return () => {
      clearTimeout(dimTimer);
      clearTimeout(disappearTimer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative w-full min-h-screen">
      <Image
        src="/0-8/0-8-tree-3.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      <AnimatePresence>
        {fadeStage < 2 && (
          <>
            <motion.div
              className="relative text-center flex justify-center items-center left-[25%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeStage === 1 ? 0.3 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1 } }}
            >
              <Image
                width={181}
                height={69}
                src="/0-8/0-8-text.webp"
                alt="text background"
                className="relative inset-0 z-0"
              />
              <span
                className="absolute font-th text-[#182649] z-10"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                {t("p1.s1")}
              </span>
            </motion.div>

            {fadeStage === 1 && (
              <motion.div
                className="absolute text-center flex justify-center items-center top-[30%] left-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} // Smooth fade-out
                transition={{ opacity: { duration: 1 } }}
              >
                <Image
                  width={181}
                  height={69}
                  src="/0-8/0-8-text.webp"
                  alt="text background"
                  className="relative inset-0 z-0"
                />
                <span
                  className="absolute font-th text-[#182649] z-10"
                  style={{ fontSize: "18px", textAlign: "center" }}
                >
                  {t("p1.s2")}
                </span>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page0_8_10;
