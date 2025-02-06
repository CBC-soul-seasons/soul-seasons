"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import React from "react";

const Scene1_4Page5: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[46%] right-[16%] flex items-center justify-center text-[64px] font-normal"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Goals!
      </motion.div>
      <DelayedFullScreenLink href="1-4-6" delay={2000} />
    </div>
  );
};

export default Scene1_4Page5;
