"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene3_3Page3: React.FC = () => {
  const t = useTranslations("3-3-3");

  const name = getLocalStorageWithFallback("name", t("name"));

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[8%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex h-auto w-full px-6">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow">
              {name ?? t("name")} : {t("both")}
            </p>
          </div>
        </div>
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
      <DelayedFullScreenLink href="3-3-4" delay={2000} />
    </div>
  );
};

export default Scene3_3Page3;
