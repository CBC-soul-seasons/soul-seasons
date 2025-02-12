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
    // 2
    {
      text: (
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginBottom: 400,
            left: "35%",
          }}
        >
          {/* Background Image */}
          <img
            src="/0-8/0-8-text.webp"
            alt="text"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Text Content */}
          <span
            className="font-th text-[#182649] z-10"
            style={{
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            สำเร็จไปอีกขั้นแล้วนะ
          </span>
        </div>
      ),
      style: {
        fontSize: "18px",
        marginTop: 5,
        marginBottom: 137,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 3
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
        router.push("/0-8/5");
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
        src="/0-8/0-8-tree-4.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
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
