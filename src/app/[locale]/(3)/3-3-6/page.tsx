"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import React from "react";

const Scene3_3Page6: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[15%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <Link href="3-3-7">
          <div className="bg-gradient-to-b from-[#D9D9D9] to-[#737373] w-[167px] h-[167px] rounded-full opacity-50 bg-blend-luminosity shadow-touch" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Scene3_3Page6;
