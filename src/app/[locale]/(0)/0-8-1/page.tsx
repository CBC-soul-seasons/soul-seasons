"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SlideUnlock from "@/components/ui/slide-to-unlock";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page0_8_1 = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const router = useRouter();

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Navigate to page /0-8-2
    router.push("/0-8-2");
  };

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
      {!isUnlocked && (
        <SlideUnlock
          onUnlock={handleUnlock}
          className="absolute top-[85%] left-1/2 transform -translate-x-1/2"
        />
      )}
      {isUnlocked && (
        <motion.div
          // If you're using text animations, ensure currentTextIndex and texts are defined
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {/* Render your unlocked content here */}
          Unlocked!
        </motion.div>
      )}
    </div>
  );
};

export default Page0_8_1;
