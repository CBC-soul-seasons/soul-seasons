"use client";
import { Link } from "@/i18n/routing";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene1_4Page2: React.FC = () => {
  const t = useTranslations("1-4-2");

  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[49%] right-[19%] w-60 h-10 flex items-center justify-center text-center text-lg text-black"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {name ?? t("name")} &<br /> {importantPerson ?? t("importantPerson")}
      </motion.div>

      <motion.div
        className="absolute bottom-[39%] right-[4%] w-16 h-16"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Link href="/1-4-4">
          <div className="w-full h-full rounded-full opacity-50 bg-[#D9D9D9]" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Scene1_4Page2;
