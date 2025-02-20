"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page0_8_26 = () => {
  const t = useTranslations("0-8-26");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("0-8-27");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/0-8/0-8-tree-7.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      <motion.div
        style={{
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginBottom: 400,
            right: "30%",
          }}
        >
          <img
            src="/0-8/0-8-text.webp"
            alt="text background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <span
            className="font-th text-[#182649] z-10"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {t("p1.s1")}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Page0_8_26;
