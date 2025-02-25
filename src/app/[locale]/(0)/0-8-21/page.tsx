"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";

const Page0_8_21 = () => {
  const t = useTranslations("0-8-21");
  const router = useRouter();
  const [fadeStage, setFadeStage] = useState(0);

  useEffect(() => {
    const dimTimer = setTimeout(() => {
      setFadeStage(1);
    }, 2000);

    const disappearTimer = setTimeout(() => {
      setFadeStage(2);
    }, 4000);

    return () => {
      clearTimeout(dimTimer);
      clearTimeout(disappearTimer);
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center relative w-full min-h-screen cursor-pointer">
      <Image
        src="/0-8/0-8-tree-6.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      <AnimatePresence>
        {fadeStage < 2 && (
          <>
            <motion.div
              className="absolute flex flex-col justify-center items-center right-[25%] top-[30%] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeStage === 1 ? 0.3 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1 } }}
            >
              <Image
                width={181}
                height={69}
                src="/0-8/0-8-text.webp"
                alt="text background"
                className="relative z-0"
              />
              <span className="absolute font-th text-[#182649] text-lg z-10 leading-snug">
                {t("p1.s1")}
                <br />
                {t("p1.s2")}
              </span>
            </motion.div>

            {fadeStage === 1 && (
              <motion.div
                className="absolute flex flex-col justify-center items-center left-[10%] top-[10%] text-center"
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
                  className="relative z-0"
                />
                <span className="absolute font-th text-[#182649] text-lg z-10 leading-snug">
                  {t("p1.s3")}
                </span>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page0_8_21;
