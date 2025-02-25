"use client";
import SlideUnlock from "@/components/ui/slide-to-unlock";
import Image from "next/image";

const Page0_8_9 = () => {
  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/0-8/0-8-tree-3.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <SlideUnlock
        nextPage="/0-8-10"
        className="absolute top-[85%] left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default Page0_8_9;
