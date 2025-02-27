"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import NextDisplay from "@/components/ui/nextDisplay";

const Scene6_3Page3: React.FC = () => {
  const t = useTranslations("5-2-1");
  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="w-[200px] h-[200px] absolute bottom-[260px] left-[80px] rotate-90">
        <Image
          src="/background/fruit.webp"
          fill
          objectFit="contain"
          alt="christmas-tree"
        />
      </div>
      <motion.div
        className="absolute top-[73%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex h-auto w-full px-6">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow-text leading-[24.68px]">
              {importantPerson ?? t("importantPerson")}
              {t("lookAt")}
              {name ?? t("name")}
              {t("ourTree")}
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
        className="flex justify-center absolute top-[85%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>
      <DelayedFullScreenLink href="5-2-2" delay={2000} />
    </div>
  );
};

export default Scene6_3Page3;
