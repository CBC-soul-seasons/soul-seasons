"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

const Scene6_3Page3: React.FC = () => {
  const t = useTranslations("5-2-3");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
     <div 
        className="w-[200px] h-[200px] absolute bottom-[260px] left-[80px] rotate-90">
          <Image
            src="/background/fruit.webp"
            fill
            objectFit="contain"
            alt="christmas-tree"
            priority
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
              {t("lets")}
            </p>
          </div>
        </div>
      </motion.div>
      <DelayedFullScreenLink href="5-2-4" delay={1500} />
    </div>
  );
};

export default Scene6_3Page3;
