"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";

const Page2_1_2 = () => {
  const t = useTranslations("2-1-2");

  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginBottom: 370,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : {t("p1.s1")}
        </p>
        <p>{t("p1.s2")}</p>
      </motion.div>

      <DelayedFullScreenLink href="2-1-3" delay={2000} />
    </div>
  );
};

export default Page2_1_2;
