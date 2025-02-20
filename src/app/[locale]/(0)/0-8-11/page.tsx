"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page0_8_11 = () => {
  const t = useTranslations("0-8-11");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("0-8-12");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center relative w-full min-h-screen cursor-pointer">
      {/* Background Tree Image */}
      <Image
        src="/0-8/0-8-tree-3.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {/* First Animated Block */}
      <motion.div
        className="text-center mt-[400px]"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div
          className="relative flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginBottom: "400px",
            left: "100%", // adjust if needed
          }}
        >
          <img
            src="/0-8/0-8-text.webp"
            alt="text background"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          />

          <span
            className="font-th text-[#182649] z-10 opacity-50"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {t("p1.s1")}
          </span>
        </div>
      </motion.div>

      {/* Second Animated Block */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div
          className="relative flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginBottom: "400px",
            right: "90%",
          }}
        >
          <img
            src="/0-8/0-8-text.webp"
            alt="text background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <span
            className="font-th text-[#182649] z-10 block"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {t("p1.s2")}
          </span>
          <span
            className="font-th text-[#182649] z-10 block"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {t("p1.s3")}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Page0_8_11;
