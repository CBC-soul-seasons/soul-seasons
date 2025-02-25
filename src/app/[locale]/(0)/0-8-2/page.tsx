"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page0_8_2 = () => {
  const t = useTranslations("0-8-2");
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center relative w-full min-h-screen">
      <Image
        src="/0-8/0-8-tree-1.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <AnimatePresence>
        {showText && (
          <motion.div
            className="relative text-center flex justify-center items-center right-[25%] top-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page0_8_2;
