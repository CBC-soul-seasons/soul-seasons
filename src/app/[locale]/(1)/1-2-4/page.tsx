"use client";

import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page1_2_4 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("1-2-5");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative"></div>
  );
};

export default Page1_2_4;
