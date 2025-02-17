"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/background/3-2-7.png",
  "/background/3-2-8.png",
  "/background/3-2-9.png",
  "/background/3-2-10.png",
  "/background/3-2-7.png",
];

const Page3_2_7 = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (currentImageIndex < images.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        router.push("3-2-10");
      }, 1500);
    }
  }, [currentImageIndex, router]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
};

export default Page3_2_7;
