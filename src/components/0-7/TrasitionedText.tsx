"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const id_to_image: {
  [key: string]: string;
} = {
  "1": "/0-7/0-7-1.png",
  "2": "/0-7/0-7-2.png",
  "3": "/0-7/0-7-3.png",
  "4": "/0-7/0-7-4.png",
  "5": "/0-7/0-7-5.png",
  "6": "/0-7/0-7-6.png",
  "7": "/0-7/0-7-7.png",
};

export const TransitionText = ({ pageId }: { pageId: string }) => {
  const image = id_to_image[pageId];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.5,
      }}
      className="flex flex-col items-center justify-center"
    >
      <Image src={image} alt="Picture of the author" width={500} height={500} />
    </motion.div>
  );
};
