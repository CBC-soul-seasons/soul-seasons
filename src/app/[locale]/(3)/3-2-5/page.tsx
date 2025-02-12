"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ navigation system

const Page3_2_5 = () => {
  const router = useRouter(); // Router for navigation
  const [navigate, setNavigate] = useState(false); // State to track navigation

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNavigate(true);
      router.push("3-2-6"); // Automatically navigate after 1s
    }, 5000); // 1-second delay before navigation

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative"></div>
  );
};

export default Page3_2_5;
