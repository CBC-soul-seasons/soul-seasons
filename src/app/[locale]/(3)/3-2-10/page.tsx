"use client";

import { motion } from "framer-motion";
import NextDisplay from "@/components/ui/nextDisplay";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";

const Page3_2_10 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 4 },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center absolute top-[90%] inset-x-0"
      >
        <NextDisplay />
      </motion.div>

      <DelayedFullScreenLink href="3-2-11" delay={2000} />
    </div>
  );
};

export default Page3_2_10;
