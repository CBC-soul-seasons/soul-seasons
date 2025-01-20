'use client';
import { useRouter } from "next/navigation";
import Shadow from "../../../../components/ui/Shadow";
import Background1 from "../../../../img/background/0.png";
import MessageBox from "../../../../components/ui/messagebox";
import Tab from '../../../../img/icons/tab.png';
import HideTabTh from '../../../../img/icons/hidetabTh.png';
import HideTabEn from '../../../../img/icons/hidetabEn.png';
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Scene032 = () => {
  const t:any = useTranslations("zero32")
    const router = useRouter();
    const HandleClick = ()=>{
        router.push("/en/0/0-4-1");
    }
    const locale = useLocale(); // Use the useLocale hook
    const imageSrc = locale === "th" ? HideTabTh.src : HideTabEn.src;

      return(
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
        className="flex justify-center items-center h-full flex-col ">
      
    <div className="flex justify-end h-full flex-col">
        <h1 className=" text-primaryblue text-[28px] mb-[10px] font-bold">{t("title")}</h1>
      </div>
      <div className="flex justify-start items-center h-full flex-col gap-5">
        <MessageBox message={
          <div className="flex flex-col text-primaryblue  font-light text-[18px] w-[292px] leading-6 space-y-3">
          <p>{t("p1.s1")} <span className="font-bold">{t("p1.s2")}</span>
            {t("p1.s3")}
            </p>
            
          </div>
        }
        BoxPadding="px-3 py-5"/>
        <div className="flex justify-start items-center h-full flex-col gap-5 relative">
            <img src={Tab.src}/>
            <div className=" absolute w-[27px] h-[27px] border-solid border-[2px] border-black rounded-[100%] top-[9px] left-[25px] "/>
            <img src={imageSrc}/>
            <div className=" absolute w-[220px] h-[32px] border-solid border-[2px] border-black rounded-[12px] top-[160px] "/>
        </div>
      </div>
      
      <div className='flex justify-start items-start h-full flex-col mt-10'>
        <button onClick={HandleClick} className=' font-bold bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            {t('btn')}
        </button>
        </div>
   </motion.div>

  </Shadow>

  </section>
  )
}

export default Scene032;