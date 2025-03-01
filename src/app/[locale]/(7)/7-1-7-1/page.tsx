"use client";
import Bar from "@/components/ui/bar";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { getDynamicFontSize } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";

const Page7_1_7_1 = () => {
  const t = useTranslations("7-1-7");
  const locale = useLocale();
  const goal = getLocalStorageWithFallback("currentGoal", "Inspiring flame");
  const translatedText = t(`1.${goal}`);
  const [textSize, setTextSize] = useState("1.25rem");

  useEffect(() => {
    setTextSize(getDynamicFontSize(locale, translatedText.length));
  }, [translatedText, locale]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1, delay: 0 },
        }}
        className="flex flex-col gap-4 text-center absolute top-[35%] right-[13%] w-2/3"
      >
        <Bar stressScore={1} showLabel={false} />
        <span className="font-semibold text-xl">{t("earlySeason")}</span>
        <p style={{ fontSize: textSize }}>{translatedText}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 4 },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center absolute top-[90%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>

      <DelayedFullScreenLink href="7-1-7-2" delay={2000} />
    </div>
  );
};

export default Page7_1_7_1;
