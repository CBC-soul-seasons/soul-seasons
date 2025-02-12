"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Page3_2_3 = () => {
  const t = useTranslations("3-2-3");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginTop: 5,
          marginBottom: 137,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p style={{ color: "#FFFFFF" }}>{t("p1.s1")}</p>
        <p style={{ color: "#FFFFFF" }}>{t("p1.s2")}</p>
        <p style={{ color: "#FFFFFF" }}>{t("p1.s3")}</p>
        <br />
        <p style={{ color: "#FFFFFF" }}>{t("p1.s4")}</p>
        <p style={{ color: "#FFFFFF" }}>{t("p1.s5")}</p>
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
      <DelayedFullScreenLink href="3-2-4" delay={2000} />
    </div>
  );
};

export default Page3_2_3;
