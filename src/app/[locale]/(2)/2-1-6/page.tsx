"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";

const Page2_1_6 = () => {
  const t = useTranslations("2-1-6");

  const name = getLocalStorageWithFallback("name", t("name"));

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-white absolute top-[88%] "
        style={{
          fontSize: "18px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {name ?? t("name")} : {t("p1.s1")}
        </p>
        <p>{t("p1.s2")}</p>
      </motion.div>

      <DelayedFullScreenLink href="2-1-7" delay={2000} />
    </div>
  );
};

export default Page2_1_6;
