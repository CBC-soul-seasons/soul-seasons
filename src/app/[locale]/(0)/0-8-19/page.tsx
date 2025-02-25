"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page0_8_19 = () => {
  const t = useTranslations("0-8-19");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className="flex justify-center items-center relative w-full min-h-screen cursor-pointer">
      <Image
        src="/0-8/0-8-tree-5.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {/* Text Animation - Fades out after 4s */}
      <motion.div
        className="relative flex justify-center items-center text-center"
        initial={{ opacity: 0, z: -20 }}
        animate={fadeOut ? { opacity: 0 } : { opacity: 1, z: 0 }}
        transition={{ opacity: { duration: 1 }, z: { duration: 1 } }}
      >
        <div className="relative w-full h-full flex justify-center items-center mb-[500px]">
          <Image
            src="/0-8/0-8-text.webp"
            alt="text background"
            layout="intrinsic"
            width={181}
            height={69}
            className="relative inset-0 object-cover z-0"
          />

          <span className="absolute font-th text-[#182649] z-10 text-lg leading-snug">
            {t("p1.s1")}
            <br />
            {t("p1.s2")}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Page0_8_19;
