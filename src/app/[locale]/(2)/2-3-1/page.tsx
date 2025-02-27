"use client";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import SparklingChristmasTree from "@/components/ui/SparklingChristmasTree";
import NextDisplay from "@/components/ui/nextDisplay";

const Scene2_3Page1: React.FC = () => {
  const t = useTranslations("2-3-1");

  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );
  const motivations = getLocalStorageWithFallback(
    "motivations",
    t("motivations")
  );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4 max-w-[80%]"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : {t("iSee")}
        </p>
        <p>{motivations}</p>
        <p>{t("isMotivations")}</p>
      </motion.div>

      <SparklingChristmasTree />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 0,
          transition: { duration: 1, delay: 2 },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center absolute top-[90%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>

      <DelayedFullScreenLink href="2-3-2" delay={2000} />
    </div>
  );
};

export default Scene2_3Page1;
