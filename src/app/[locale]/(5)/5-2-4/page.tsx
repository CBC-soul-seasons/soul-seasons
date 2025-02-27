"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "@/i18n/routing";

const Scene5_2Page4: React.FC = () => {
  const t = useTranslations("5-2-4");
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center"
      onClick={() => {
        setClickCount((prev) => prev + 1);
        const currentClickCount = clickCount;

        // clear previous timeout and set new timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          if (currentClickCount === clickCount) {
            // console.log("timeout", currentClickCount, clickCount)
            router.push("/5-2-7");
          }
        }, 3000);
        // console.log("currentClickCount", currentClickCount, timeoutId, newTimeoutId)
        setTimeoutId(newTimeoutId);

        // cutoff timer
        setTimeout(() => {
          // console.log("cutoff timer")
          router.push("/5-2-7");
        }, 15000);
      }}
    >
      <div
        className={`w-[200px] h-[200px] absolute bottom-[260px] left-[80px] 
          rotate-90
          transform transition duration-700 ease-in  delay-500`}
      >
        <Image
          src="/background/fruit.webp"
          fill
          objectFit="contain"
          alt="christmas-tree"
        />
      </div>
      {clickCount > 0 ? (
        <motion.div
          className="absolute top-[73%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 7, duration: 1 }}
        >
          <div className="flex h-auto w-full px-6">
            <div className="items-cemter flex h-full w-full flex-col justify-center">
              <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow-text leading-[24.68px]">
                {t("haveYou")}
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
      <motion.div
        className="absolute bottom-[35%] right-[12%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <div className="animate-pulse">
          <div className="bg-gradient-to-b from-[#D9D9D9] to-[#737373] w-[67px] h-[67px] rounded-full opacity-50 bg-blend-luminosity shadow-touch cursor-pointer" />
        </div>
      </motion.div>
    </div>
  );
};

export default Scene5_2Page4;
