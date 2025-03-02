"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";

const Scene01: React.FC = () => {
  const t = useTranslations("0-1");

  return (
    <section className="w-full h-lvh flex flex-col">
      <div className="flex justify-center items-center h-full flex-col">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex flex-col items-center text-center text-base text-woh-black"
        >
          <img
            src={"/icons/soul-season-main-logo.webp"}
            alt="Soul Seasons Logo"
            className="w-[300px] h-[300px] transform -rotate-[10deg]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex flex-col items-center text-center text-base text-woh-black"
        >
          <NextButton url="/0-2" disabled={false} label={t("btn")} />
        </motion.div>
      </div>
    </section>
  );
};

export default Scene01;
