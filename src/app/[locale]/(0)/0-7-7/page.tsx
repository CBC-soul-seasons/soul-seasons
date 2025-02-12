"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page0_7_7 = () => {
  const t = useTranslations("0-7-7");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginTop: 5,
          marginBottom: 137,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p className="opacity-40">{t("p1.s1")}</p>
        <p className="opacity-40">{t("p1.s2")}</p>
        <br />
        <p className="opacity-40">{t("p1.s3")}</p>
        <p className="opacity-40">{t("p1.s4")}</p>
        <p className="opacity-40">{t("p1.s5")}</p>
        <br />
        <p>{t("p1.s6")}</p>
        <p>{t("p1.s7")}</p>
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

      <DelayedFullScreenLink href="0-7-1" delay={2000} />
    </div>
  );
};

export default Page0_7_7;
