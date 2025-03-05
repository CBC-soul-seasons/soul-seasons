"use client";
import Bar from "@/components/ui/bar";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { Season } from "@/lib/enum";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { getDynamicFontSize } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page7_1_7_3 = () => {
  const locale = useLocale();
  const t = useTranslations("7-1-7");
  const [textSize, setTextSize] = useState("1.25rem");
  const goal = getLocalStorageWithFallback(
    "currentGoal",
    Season.InspiringFlames
  );
  const translatedText = t(`3.${goal}`);

  useEffect(() => {
    setTextSize(getDynamicFontSize(locale, translatedText.length));
  }, [translatedText, locale]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="flex flex-col gap-4 text-center absolute top-[35%] right-[13%] w-2/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <Bar stressScore={9} showLabel={false} />
        <span className="font-semibold text-xl">{t("bloomSeason")}</span>
        <p style={{ fontSize: textSize }}>{t(`3.${goal}`)}</p>
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

      <DelayedFullScreenLink href="7-2" delay={2000} />
    </div>
  );
};

export default Page7_1_7_3;
