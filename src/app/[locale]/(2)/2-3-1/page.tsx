"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page2_3_1 = () => {
  const t = useTranslations("2-3-1");

  const importantPerson =
    typeof window !== "undefined" &&
    localStorage.getItem("importantPerson") != null
      ? localStorage.getItem("importantPerson")
      : t("importantPerson");
  // TODO : USE MOTIVATIONS
  const motivations =
    typeof window !== "undefined" && localStorage.getItem("motivations") != null
      ? localStorage.getItem("motivations")
      : t("motivations");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : {t("iSee")}
        </p>
        <p>{motivations}</p>
        <p>{t("isMotivations")}</p>
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
        className="flex justify-center absolute top-[75%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>

      <DelayedFullScreenLink href="2-3-2" delay={2000} />
    </div>
  );
};

export default Page2_3_1;
