"use client";
import Image from "next/image";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page0_8_21 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("0-8-22");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/0-8/0-8-tree-6.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
    </div>
  );
};

export default Page0_8_21;
