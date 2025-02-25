"use client";
import Bar from "@/components/ui/bar";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { useRouter } from "@/i18n/routing";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const Page7_1_7_1 = () => {
  const t = useTranslations("7-1-7");
  const router = useRouter();

  const goal = getLocalStorageWithFallback("currentGoal", "Inspiring flame");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("7-1-7-1");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="flex flex-col gap-4 text-center absolute top-[35%] right-[13%] w-2/3"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1, delay: 0 },
        }}
      >
        <Bar stressScore={1} showLabel={false} />
        <span className="font-semibold text-xl">{t("earlySeason")}</span>
        <p>{t(`1.${goal}`)}</p>
      </motion.div>
    </div>
  );
};

export default Page7_1_7_1;
