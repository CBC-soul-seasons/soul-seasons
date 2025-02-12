"use client";

import { motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  const texts = [
    // 1
    {
      text: (
        <>
          <span className="font-th text-[#182649] opacity-40"></span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        marginBottom: 82,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentTextIndex + 1;

      if (nextIndex === texts.length) {
        router.push("/0-8/9");
        clearInterval(interval);
        return;
      }
      setCurrentTextIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length, router]);

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
        className="absolute z-0 opacity-50"
      />

      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        style={{
          ...texts[currentTextIndex].style,
          position: "relative",
        }}
      >
        {texts[currentTextIndex].text}
      </motion.div>
    </div>
  );
};

export default Page;
