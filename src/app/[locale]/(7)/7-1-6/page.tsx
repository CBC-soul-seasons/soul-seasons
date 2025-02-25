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
        className="text-center absolute top-[37%] right-[20%] w-1/2"
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

      <DelayedFullScreenLink href="7-1-7-2" delay={2000} />
    </div>
  );
};

export default Page7_1_7_1;
