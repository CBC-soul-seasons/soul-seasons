"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page0_8_13 = () => {
  const t = useTranslations("0-8-13");
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 1 } }}
      className="flex h-screen items-center justify-center relative"
    >
      <Image
        src="/0-8/0-8-tree-4.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {showText && (
        <motion.div
          className="absolute flex flex-col justify-center items-center left-[35%] top-[15%] text-center"
          initial={{ opacity: 0 }}
          animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
          transition={{ opacity: { duration: 1 } }}
        >
          <Image
            width={181}
            height={69}
            src="/0-8/0-8-text.webp"
            alt="Text Background"
            className="relative z-0"
          />
          <span className="absolute font-th text-[#182649] text-lg z-10 leading-snug">
            {t("p1.s1")}
            <br />
            {t("p1.s2")}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Page0_8_13;
