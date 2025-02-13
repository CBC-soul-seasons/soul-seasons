'use client'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter } from '@/i18n/routing';
import { useEffect } from 'react';
const Scene3_1_2 = ()=>{
   const t = useTranslations("3-1-2")
  const router = useRouter();
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push("3-1-3");
      }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  const importantPerson = localStorage.getItem('importantPerson')
  const username = localStorage.getItem('name')
    
    return(
        <section className="w-full justify-start items-center h-lvh flex flex-col" 
        >
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' h-full flex text-white justfy-center items-start mt-[248px] font-light text-center'
                >
                    
                <p className='w-[279px] h-auto'>
                    {importantPerson ? importantPerson : 'importantPerson' } : “{t("p1.s1")} {username ? username : "username"}”
                    <br/>
                    {t("p1.s2")}
                    <br/>
                    {t("p1.s3")}”
                    <br/>
                    {t("p1.s4")}
                </p>
          
                </motion.div>
           
        </section>
    )
}

export default Scene3_1_2

