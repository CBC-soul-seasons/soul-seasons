"use client";
import MessageBox from "@/components/ui/messagebox";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";

const Scene032 = () => {
  const t = useTranslations("0-3-2");

  const locale = useLocale();
  const imageSrc =
    locale === "th" ? "/icons/hidetabTh.png" : "icons/hidetabEn.png";

  return (
    <section className="w-full justify-center h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          easings: "easeOut",
        }}
        className="flex justify-center items-center h-full flex-col "
      >
        <div className="flex justify-end h-full flex-col">
          <h1 className=" text-primaryblue text-[28px] mb-[10px] font-bold">
            {t("title")}
          </h1>
        </div>
        <div className="flex justify-start items-center h-full flex-col gap-5">
          <MessageBox
            message={
              <div className="flex flex-col text-primaryblue  font-light text-[18px] w-[292px] leading-6 space-y-3">
                <p>
                  {t("p1.s1")} <span className="font-bold">{t("p1.s2")}</span>
                  {t("p1.s3")}
                </p>
              </div>
            }
            BoxPadding="px-3 py-5"
          />
          <div className="flex justify-start items-center h-full flex-col gap-5 relative">
            <img src="/icons/tab.png" />
            <div className=" absolute w-[27px] h-[27px] border-solid border-[2px] border-black rounded-[100%] top-[9px] left-[25px] " />
            <img src={imageSrc} />
            <div className=" absolute w-[220px] h-[32px] border-solid border-[2px] border-black rounded-[12px] top-[160px] " />
          </div>
        </div>

        <div className="flex justify-start items-start h-full flex-col mt-10">
          <NextButton disabled={false} url="/0-4-1" />
        </div>
      </motion.div>
    </section>
  );
};

export default Scene032;
