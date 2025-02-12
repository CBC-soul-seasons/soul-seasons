"use client";

import { motion } from "framer-motion";
import { useState, CSSProperties } from "react";

const Page = () => {
  const texts = [
    // 1
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">คนสำคัญ : "เสร็จสักที</span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            แค่นี้็ดูเป็นต้นคริสต์มาสแล้ว"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 300,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 2
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            คนสำคัญ : "ต้นไม้โตขึ้นเยอะเลยเนอะ"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 330,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 3
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            คนสำคัญ : "นี่ก็จะปีใหม่แล้ว
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            มีเป้าหมายอะไรที่วางไว้ แล้วยังไปไม่ถึงมั้ย"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 300,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 4
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">Username : "Text</span>
          <br />
          <span className="font-th text-[#FFFFFF]">Text น่ะ"</span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 690,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 5
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">คนสำคัญ : "ว่าแต่</span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            เธอมีแรงบันดาลใจอะไรเบื้องหลังเป้าหมายนี้หรอ"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 300,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 6
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            Username : "อืมม มันสำคัญด้วยหรอ"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 650,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 7
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            คนสำคัญ : "สำคัญสิ... รู้มั้ย
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            ว่าการปลูกต้นไม้ก็เหมือนการทำเป้าหมายอะไร
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">ซักอย่างสำเร็จนะ"</span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 292,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 8
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            คนสำคัญ : "แรงผลักดันหรือ motivation
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            เปรียบเสมือนปุ๋ยชั้นดีที่หล่อเลี้ยงต้นไม้
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            ให้เติบโตอย่างแข็งแรงและงดงาม"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 292,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 9
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            คนสำคัญ : "แรงผลักดันหรือ motivation
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            เปรียบเสมือนปุ๋ยชั้นดีที่หล่อเลี้ยงต้นไม้
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            ให้เติบโตอย่างแข็งแรงและงดงาม"
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            เช่นเดียวกับที่มันช่วยหล่อเลี้ยงจิตใจและผลัก
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            ดันให้เราเติบโตอย่างมีความหมาย”
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginBottom: 227,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 10
    {
      text: (
        <>
          <span className="font-th text-[#FFFFFF]">
            Username : "งั้น...ฉันต้องหา
          </span>
          <br />
          <span className="font-th text-[#FFFFFF]">
            motivation ของตัวเองบ้างแล้วล่ะ"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 690,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleScreenClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      onClick={handleScreenClick}
      style={{ cursor: "pointer" }}
    >
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
