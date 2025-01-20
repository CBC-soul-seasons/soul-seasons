"use client";

import Background1 from '../../../../img/background/0.png';
import SoulSeasons from '../../../../img/icons/Soul Seasons-MAIN LOGO 1.png';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";


const Scene01: React.FC = () => {
    const t = useTranslations('zero1');
  const router = useRouter();

  const HandleClick = () => {
    router.push('/en/0/0-2');
  };

  return (
    <section
      className="w-full h-lvh flex flex-col"
      style={{
        backgroundImage: `url(${Background1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       
      <div className="flex justify-center items-center h-full flex-col">
        {/* Animated Image */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex flex-col items-center text-center text-base text-woh-black"
      >
        <img
          src={SoulSeasons.src}
          alt="Soul Seasons Logo"
        
        />
         </motion.div>
         
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex flex-col items-center text-center text-base text-woh-black"
      >
        {/* Animated Button */}
        <button
          onClick={HandleClick}
          className="bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold cursor-pointer mt-4"
        >
          {t("btn")}
        </button>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Scene01;
