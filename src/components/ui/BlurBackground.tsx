import { motion } from "framer-motion";

type Shadows = {
  children?: React.ReactNode;
};

const BlurBackground: React.FC<Shadows> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      className="cover backdrop-blur-sm bg-white bg-opacity-20 h-full top-0 left-0 z-50 relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none"
    >
      <div className="flex flex-col justify-center items-center h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default BlurBackground;
