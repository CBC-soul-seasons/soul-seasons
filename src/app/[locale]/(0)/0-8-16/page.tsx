"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SlideUnlock from "@/components/ui/slide-to-unlock";

const Page0_8_17 = () => {
  const t = useTranslations("0-8-16");
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      setShowUnlock(true);
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
        src="/0-8/0-8-tree-5.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {showText && (
        <motion.div
          className="absolute flex flex-col justify-center items-center left-[15%] top-[20%] text-center"
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
          </span>
        </motion.div>
      )}

      {showUnlock && (
        <motion.div
          className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ opacity: { duration: 1 } }}
        >
          <SlideUnlock nextPage="/0-8-19" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Page0_8_17;
