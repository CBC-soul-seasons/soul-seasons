'use client'
import { useTranslations } from 'next-intl';
import Background1 from '../../../../img/background/0.png';
import MessageBox from '../../../../components/ui/messagebox';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Scene041 = ()=>{
    const t = useTranslations('zero41');
    const router = useRouter();
    const HandleClick = ()=>{
        router.push('/en/0/0-4-2');
    }
    return(
        <section className='w-full h-lvh flex flex-col pt-[150px]'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 1,
            delay: 1,
            }}
        className="flex justify-center items-center h-full flex-col ">
      
           <div className='flex justify-end items-center h-full flex-col'>
            
            <MessageBox 
            message={<p className='text-primaryblue  font-light text-[18px] w-[227px] leading-6'>
            <span className='font-semibold'>Soul Seasons</span> 
            <br></br> Interactive website <br></br> {t("p1.s2")}
            <span className='font-semibold'>{t("p1.s3")}
                </span>{t("p1.s4")}
            <span className='font-semibold'>{t("p1.s5")}</span></p>}
            // size=' '
            BoxPadding='px-5 py-5'
            />

           </div>

        <div className='flex justify-center items-center h-full flex-col'>
        <button onClick={HandleClick} className=' font-medium bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            {t("btn")}
        </button>
        </div>
       </motion.div>
    </section>

    )
}

export default Scene041;