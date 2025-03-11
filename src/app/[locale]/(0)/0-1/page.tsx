"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";
import Image from "next/image";

const Scene01: React.FC = () => {
  const t = useTranslations("0-1");

  return (
    <section>
    <div className="w-full h-lvh flex flex-col">
      <div className="flex justify-center items-center h-full flex-col">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center text-center text-base text-woh-black"
        >
          <img
            src={"/icons/soul-season-main-logo.webp"}
            alt="Soul Seasons Logo"
            className="w-[300px] h-[300px] transform -rotate-[10deg]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center text-center text-base text-woh-black"
        >
          <NextButton url="/0-2" disabled={false} label={t("btn")} />
        </motion.div>
      </div>

      
    </div>
    <div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    // Give the white container a fixed height & scrolling
    className="bg-white p-4 overflow-y-auto"
  >
    <h1 className="font-bold text-[28px] mb-4">{t("sponsor")}</h1>
    <div className="flex w-full gap-4">
      {/* 1st column */}
      <div className="relative flex flex-col">
        <Image
          src={"/zipevent 1.webp"}
          alt={"zipevent"}
          width={121}
          height={121}
        />
      </div>
      {/* 2nd column */}
      <div className="relative flex flex-col ">
        <Image
          src={"/artepole.webp"}
          alt={"artepole"}
          width={81}
          height={45}
        />
        <Image
          src={"/creation.webp"}
          alt={"codec"}
          width={65}
          height={63}
        />
        <Image
          src={"/anywheel.webp"}
          alt={"anywheel"}
          width={124}
          height={33}
        />
      </div>
      {/* 3rd column */}
      <div className="relative flex flex-col gap-2">
        <Image
          src={"/brighthair.webp"}
          alt={"brighthair"}
          width={65}
          height={63}
        />
        <Image
          src={"/dhas.webp"}
          alt={"dhas"}
          width={54}
          height={68}
        />
        <Image
          src={"/jbp.webp"}
          alt={"jbp"}
          width={52}
          height={24}
        />
      </div>
      {/* 4th column */}
      <div className="relative flex flex-col items-end gap-2">
        <Image
          src={"/oriental.webp"}
          alt={"oriental"}
          width={52}
          height={52}
        />
        <Image
          src={"/meekwamsook.webp"}
          alt={"meekwamsook"}
          width={60}
          height={60}
        />
      </div>
    </div>
  </motion.div>
  </div>
  </section>
  );
};

export default Scene01;
