"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page7_3_2 = () => {
  const t = useTranslations("7-3-2");

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <Image
        src="/background/7-3-2.webp"
        alt="ticket"
        width={350}
        height={100}
        objectFit="contain"
        className="relative z-0 left-[4%] top-[5%]"
      />

      <motion.div
        className="text-center text-white absolute top-[15%] "
        style={{
          fontSize: "18px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s1")}</p>
        <p>{t("p1.s2")}</p>
      </motion.div>

      <motion.div
        className="text-center text-black absolute top-[35%] right-[23%]"
        style={{
          fontSize: "14px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s3")}</p>
        <p>{t("p1.s4")}</p>
      </motion.div>

      <motion.div
        className="text-center text-black font-bold absolute bottom-[27%] right-[20%]"
        style={{
          fontSize: "16px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s5")}</p>
      </motion.div>

      <motion.div
        className="text-center text-black absolute bottom-[20%] right-[17%]"
        style={{
          fontSize: "14px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("p1.s6")}</p>
        <p>{t("p1.s7")}</p>
      </motion.div>

      <DelayedFullScreenLink href="7-3-2" delay={2000} />
    </div>
  );
};

export default Page7_3_2;
