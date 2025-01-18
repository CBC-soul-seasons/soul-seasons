"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const Page1_2_4 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <Link href="1-2-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 1.5 },
          }}
          className="flex justify-center absolute top-[75%] inset-x-0"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
};

export default Page1_2_4;
