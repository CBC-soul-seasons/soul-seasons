"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page6_2_6 = () => {
  const t = useTranslations("6-2-6");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-white absolute top-[65%] "
        style={{
          fontSize: "18px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s1")}</p>
        <p>{t("p1.s2")}</p>
        <p>{t("p1.s3")}</p>
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
        className="flex justify-center absolute top-[85%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>

      <DelayedFullScreenLink href="6-3-1" delay={2000} />
    </div>
  );
};

export default Page6_2_6;
