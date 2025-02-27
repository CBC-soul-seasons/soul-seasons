"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page1_2_1 = () => {
  const t = useTranslations("1-2-1");

  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-2/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : "{name}... {name}... {name}..."
        </p>
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

      <DelayedFullScreenLink href="1-2-2" delay={2000} />
    </div>
  );
};

export default Page1_2_1;
