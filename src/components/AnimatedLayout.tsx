"use client";

import { motion } from "framer-motion";
import Sounds from "@/components/ui/sounds";
import SoundToggle from "@/components/ui/sound-toggle";
import LangToggle from "@/components/ui/lang-toggle";
import InteractiveBackground from "@/components/interactive-background";
import { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";

interface AnimatedLayoutProps extends PropsWithChildren {
  fontClass: string;
}

const AnimatedLayout = ({ fontClass, children }: AnimatedLayoutProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InteractiveBackground />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Sounds />
      </motion.div>

      <motion.div
        className="absolute right-8 top-12 z-50 flex w-full items-center justify-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <LangToggle />
        <Separator orientation="vertical" className="h-7" />
        <SoundToggle />
      </motion.div>

      <motion.div
        className={`${fontClass} relative z-10`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedLayout;
