"use client";

import { motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";
import SlideUnlock from "@/components/ui/slide-to-unlock";

const OnePage = () => {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false); // Track if the slider is unlocked
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    // 1
    {
      text: (
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginTop: 240,
            right: "25%",
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
            เริ่มต้นได้ดี
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
    // 2
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

  useEffect(() => {
    if (!isUnlocked) {
      return; // Start only after unlocking
    }

    const interval = setInterval(() => {
      const nextIndex = currentTextIndex + 1;

      if (nextIndex === texts.length) {
        router.push("/0-8/2");
        clearInterval(interval);
        return;
      }
      setCurrentTextIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length, router, isUnlocked]);

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
        className="absolute z-0 opacity-50"
      />
      {!isUnlocked && (
        <SlideUnlock
          onUnlock={() => setIsUnlocked(true)}
          className="absolute top-[85%] left-1/2 transform -translate-x-1/2"
        />
      )}
      {isUnlocked && (
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ ...texts[currentTextIndex].style, position: "relative" }}
        >
          {texts[currentTextIndex].text}
        </motion.div>
      )}
    </div>
  );
};

export default OnePage;
