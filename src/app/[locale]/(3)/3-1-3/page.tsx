"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
const Scene3_1_3 = () => {
  const t = useTranslations("3-1-3");

  return (
    <section className="w-full justify-start items-center h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" h-full flex text-white justfy-center items-start mt-[248px] font-light text-center"
      >
        <p className="w-[279px] h-auto">
          {t("p1.s1")}
          <br />
          {t("p1.s2")}
        </p>
      </motion.div>
      <DelayedFullScreenLink href="3-1-4" delay={3000} />
    </section>
  );
};

export default Scene3_1_3;
