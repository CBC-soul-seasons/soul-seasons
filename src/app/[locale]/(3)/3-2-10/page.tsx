"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ navigation system
import { motion } from "framer-motion";

const Page3_2_10 = () => {
  const router = useRouter(); // Router for navigation
  const [navigate, setNavigate] = useState(false); // State to track navigation

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNavigate(true);
      router.push("3-2-11"); // Automatically navigate after 1s
    }, 5000); // 1-second delay before navigation

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img
          src="/background/3-2-10.png"
          alt="Descriptive Alt Text"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_10;
