"use client";

import { motion } from "framer-motion";

const TestMotion = () => {
  return (
    <motion.img
      src="https://via.placeholder.com/150"
      alt="test"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default TestMotion;
