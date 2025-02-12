"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";

const Page2_1_4 = () => {
  const t = useTranslations("2-1-4");

  const name = getLocalStorageWithFallback("name", t("name"));

  const goal = getLocalStorageWithFallback("goal", t("goal"));

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginTop: 640,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {name} : {goal}
          {t("p1.s1")}"
        </p>
      </motion.div>

      <DelayedFullScreenLink href="2-1-5" delay={2000} />
    </div>
  );
};

export default Page2_1_4;
