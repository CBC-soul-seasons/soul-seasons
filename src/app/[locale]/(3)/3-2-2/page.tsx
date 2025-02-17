"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextDisplay from "@/components/ui/nextDisplay";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";

const Page3_2_2 = () => {
  const t = useTranslations("3-2-2");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-[27%] w-2/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s1")}</p>
        <p>{t("p1.s2")}</p>
        <p>{t("p1.s3")}</p>
        <p>{t("p1.s4")}</p>
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

      <DelayedFullScreenLink href="3-2-3" delay={2000} />
    </div>
  );
};

export default Page3_2_2;
