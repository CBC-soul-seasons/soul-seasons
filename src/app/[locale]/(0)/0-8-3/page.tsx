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
            marginBottom: 80,
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
            สนุกจัง
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
    // 4
    {
      text: (
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{
            minHeight: "10vh",
            minWidth: "22vh",
            marginTop: 240,
            left: "45%",
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
            พยายามเข้า
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
    // 5
    {
      text: (
        <div>
          <div className="relative w-full h-full flex justify-center items-center min-h-[10vh] min-w-[22vh] mb-[120px] right-[30%]">
            {/* Background Image */}
            <img
              src="/0-8/0-8-text.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Text Content */}
            <span
              className="font-th text-[#182649] z-10 text-center"
              style={{
                fontSize: "18px",
              }}
            >
              จะทำให้ได้เลย
            </span>
          </div>

          <div className="relative w-full h-full flex justify-center items-center opacity-50 min-h-[10vh] min-w-[22vh] mt-[60px] left-[30%]">
            {/* Background Image */}
            <img
              src="/0-8/0-8-text.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Text Content */}
            <span
              className="font-th text-[#182649] z-10 text-center"
              style={{
                fontSize: "18px",
              }}
            >
              พยายามเข้า
            </span>
          </div>
        </div>
      ),
      style: {
        fontSize: "18px",
        marginTop: 5,
        marginBottom: 137,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 6
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
        router.push("/0-8/4");
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
        src="/0-8/0-8-tree-3.webp" // Ensure the file is located in the public folder
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
