"use client";
import MessageBox from "@/components/ui/messagebox";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";

const Scene031 = () => {
  const t = useTranslations("0-3-1");

  return (
    <section className="w-full justify-center h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex justify-center items-center h-full flex-col"
      >
        <div className="flex justify-end h-full flex-col">
          <h1 className="text-primaryblue justify-center text-[28px]  font-bold">
            {t("title")}
          </h1>
        </div>
        <div className="flex justify-center h-full items-center flex-col  w-[320px] ">
          <MessageBox
            message={
              <div className="flex flex-col text-primaryblue font-light text-[18px] w-auto leading-6 space-y-3">
                <p>
                  {t("p1.s1")}
                  <br /> <span className="font-bold w-full"> {t("p1.s2")}</span>
                  <br />
                  {t("p1.s3")}
                  <br />
                  {t("p1.s4")}
                  <br />
                  {t("p1.s5")}
                  <br />
                  {t("p1.and")}
                  <span className="font-bold w-full">{t("p1.s6")}</span>
                </p>
              </div>
            }
            BoxPadding="px-5 py-5"
          />
        </div>
        <div className="flex justify-start mt-10 items-start h-full flex-col">
          <NextButton disabled={false} url="/0-3-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Scene031;
