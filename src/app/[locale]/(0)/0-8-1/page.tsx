"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import NextDisplay from "@/components/ui/nextDisplay";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";

const Page0_8_1 = () => {
  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/0-8/0-8-tree-1.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

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

      <DelayedFullScreenLink href="0-8-2" delay={2000} />
    </div>
  );
};

export default Page0_8_1;
