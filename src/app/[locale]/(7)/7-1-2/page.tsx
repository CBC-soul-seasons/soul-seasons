"use client";
import { useRouter } from "@/i18n/routing";
import { useLogicCalculation } from "@/lib/logicCalculation/logicCalculation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MarbleImg, Season } from "@/lib/enum";

const Scene7_1_2 = () => {
  const marbleImg = {
    [Season.InspiringFlames]: MarbleImg.Marble1,
    [Season.TrophiesAndTriumphs]: MarbleImg.Marble2,
    [Season.HeartAndHome]: MarbleImg.Marble3,
    [Season.LifesCanvas]: MarbleImg.Marble4,
    [Season.ARefilledHeart]: MarbleImg.Marble5,
    [Season.RibbonsAndPaperBoxes]: MarbleImg.Marble6,
  };

  const [blur, setBlur] = useState(true);
  const t = useTranslations(`7-1-2`);
  const router = useRouter();
  const { seasons } = useLogicCalculation();
  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);
  const handleClick = () => {
    router.push("7-1-4");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <section
        className="relative w-full h-lvh flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        {/* Content overlay */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {seasons && (
            <div className="pl-10 mt-24 flex flex-col w-full text-white justify-center items-center font-light text-center ">
              <img
                src={marbleImg[seasons]}
                alt="7-1-2"
                className={`w-[148px] h-auto ${blur ? "filter blur-sm dissolve" : ""} `}
              />
              <p
                className={`font-bold text-primaryblue text-[18px] mb-1 ${blur ? "filter blur-sm dissolve" : ""} `}
              >
                {t(`title.${seasons}.s1`)}
                <br />
                {t(`title.${seasons}.s2`)}
              </p>
              <p
                className={`text-primaryblue font-light text-[14px] ${blur ? "filter blur-sm dissolve" : ""} `}
              >
                {t(`p1.${seasons}.s1`)}
                <br /> {t(`p1.${seasons}.s2`)}
                <br /> {t(`p1.${seasons}.s3`)}
                <br /> {t(`p1.${seasons}.s4`)}
                <br /> {t(`p1.${seasons}.s5`)}
                <br /> {t(`p1.${seasons}.s6`)}
                <br /> {t(`p1.${seasons}.s7`)}
                <br /> {t(`p1.${seasons}.s8`)}
                <br /> {t(`p1.${seasons}.s9`)}
                <br /> {t(`p1.${seasons}.s10`)}
                <br /> {t(`p1.${seasons}.s11`)}
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Scene7_1_2;
