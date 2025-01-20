'use client';
import { useRouter } from "next/navigation";
import Shadow from "../../../../components/ui/Shadow";
import Background1 from "../../../../img/background/0.png";
import MessageBox from "../../../../components/ui/messagebox";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";


const Scene031 = () => {
    const router = useRouter();
    const t = useTranslations("zero31")
    const HandleClick = ()=>{
        router.push("/en/0/0-3-2");
    }
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
      
    <div className="flex justify-end mt-[200px] flex-col">
        <h1 className="text-primaryblue text-[28px] mb-[10px] font-bold">{t("title")}</h1>
      </div>
      <div className="flex justify-center items-center h-full flex-col w-[320px] ">
        <MessageBox message={
          <div className="flex flex-col text-primaryblue  font-light text-[18px] w-auto leading-6 space-y-3">
          <p>{t("p1.s1")} 
            <br/> <span className="font-bold w-full"> {t("p1.s2")}</span>
            <br/>{t("p1.s3")}
            <br/>{t("p1.s4")}
            <br/>{t("p1.s5")}
            <br/>{t("p1.and")}<span className="font-bold w-full">{t("p1.s6")}</span>
            </p>
            
          </div>
        }
        BoxPadding="px-5 py-5"/>
      </div>
      <div className='flex justify-start mt-[150px] items-center h-full flex-col'>
        <button onClick={HandleClick} className=' font-bold bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            {t('btn')}
        </button>
        </div>
   
  </motion.div>
  </Shadow>

  </section>
  )
}

export default Scene031;