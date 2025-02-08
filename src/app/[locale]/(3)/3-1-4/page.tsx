'use client'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
const Scene3_1_4 = ()=>{
    const t = useTranslations("3-1-4")
    return(
        <section className="w-full justify-start items-center h-lvh flex flex-col">
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' h-full flex text-white justfy-center items-start mt-[720px] font-light text-center '
                >
                    
                <p className='w-[279px] h-auto'>
                  username : “{t("p1.s1")}
                  <br/>
                  {t("p1.s2")}
                <br/>
                {t("p1.s3")}”                
                </p>
          
                </motion.div>
           
        </section>
    )
}

export default Scene3_1_4