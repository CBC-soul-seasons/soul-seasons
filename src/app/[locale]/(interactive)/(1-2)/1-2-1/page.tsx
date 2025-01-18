"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const Page1_2_1 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p> [TODOคนสำคัญ] : "userName userName userName"</p>
      </motion.div>

      <Link href="1-2-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="flex justify-center absolute top-[75%] inset-x-0"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
};

export default Page1_2_1;
