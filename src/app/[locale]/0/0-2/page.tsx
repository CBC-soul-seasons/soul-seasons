"use client";
import MessageBox from "../../../../components/ui/messagebox";
import Shadow from "../../../../components/ui/Shadow";
import Background1 from "../../../../img/background/0.png";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";


const Scene02 = () => {
  const t = useTranslations("zero2");
  const router = useRouter();
  const HandleClick = () => {
    router.push("/en/0/0-3-1");
  };
  

  return (
    <section
      className="w-full justify-center h-lvh flex flex-col"
      style={{
        backgroundImage: `url(${Background1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Shadow>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex justify-center items-center h-full flex-col">
        <div className="flex justify-end items-center h-full flex-col">
          <h1 className=" text-primaryblue text-[28px] mb-[10px]">{t("title")}</h1>
        </div>

       
        <div className="flex justify-end items-center h-full flex-col">
          <MessageBox
            size="w-[274px] h-auto"
            BoxPadding=" py-5"
            message={
              
              <div className="flex flex-col text-primaryblue  font-light text-[18px] w-[243px] leading-6 space-y-3">
                <p>
                  {t("p1.s1")}
                  <span className="font-semibold">{t("p1.s2")}</span>
                  {t("p1.and")}
                  <span className="font-semibold">{t("p1.s3")}</span>
                  {t("p1.or")}
                  <span className="font-semibold"> {t("p1.s4")}</span>
                </p>
                <p>
                  {t("p2.s1")}
                    <span className="font-semibold">
                      {t("p2.s2")}
                      
                    </span>
                      {t("p2.s3")}
                  </p>
                  <p>
                  {t("p3.s1")}
                    <span className="font-semibold">  {t("p3.s2")}</span>
                  </p>
              </div>
            }
          />
        </div>

        {/* Confirmation Button */}
        <div className="flex justify-start items-center h-full flex-col mt-10 ">
          <button
            onClick={HandleClick}
            className=" font-bold bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out"
          >
            {t("btn")}
          </button>
          
        </div>
        </motion.div>
      </Shadow>
    </section>
  );
};

export default Scene02;
