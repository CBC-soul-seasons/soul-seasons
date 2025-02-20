"use client";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page0_8_30 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("1-1-1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    ></div>
  );
};

export default Page0_8_30;
