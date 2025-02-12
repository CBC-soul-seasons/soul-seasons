"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";

const Page2_1_10 = () => {
  const t = useTranslations("2-1-10");

  const name = getLocalStorageWithFallback("name", t("name"));

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginTop: 670,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {name ?? t("name")} : {t("p1.s1")}
        </p>
        <p>{t("p1.s2")}</p>
      </motion.div>

      <DelayedFullScreenLink href="2-2-1" delay={2000} />
    </div>
  );
};

export default Page2_1_10;
