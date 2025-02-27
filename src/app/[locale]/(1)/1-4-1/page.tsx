"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene1_4Page1: React.FC = () => {
  const t = useTranslations("1-4-1");

  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[62%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex h-[135px] w-full">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow">
              {t("thereMightBe")}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-[51%] right-[24%] w-36 h-10 flex items-center justify-center text-center text-sm text-black"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {name ?? t("name")} & {importantPerson ?? t("importantPerson")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 15 },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center absolute top-[75%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>
      <DelayedFullScreenLink href="1-4-2" delay={2000} />
    </div>
  );
};

export default Scene1_4Page1;
