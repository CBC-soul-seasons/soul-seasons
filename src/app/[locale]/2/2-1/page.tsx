'use client';

import { useTranslations } from "next-intl";
import Background2 from '../../../../img/background/2.png';
import { motion } from 'framer-motion';
import  Image  from "next/image";
import potOrange from '../../../../img/icons/pot/potOrange.png';
import potPurple from '../../../../img/icons/pot/potPurple.png';
import potGreen from '../../../../img/icons/pot/potGreen.png';
import potRed from '../../../../img/icons/pot/potRed.png';
import potPink from '../../../../img/icons/pot/potPink.png';
import potYellow from '../../../../img/icons/pot/potYellow.png';
import potBlue from '../../../../img/icons/pot/potBlue.png';
import potIndigo from '../../../../img/icons/pot/potIndigo.png';
import {useState} from 'react';
import router from "next/router";

const Two2 = () => {
    const t = useTranslations('two2');
    const [clicks, setClicks] = useState(0);
    const handleClick = ()=>{
        setClicks(clicks+1);
    }
    const HandleClick = () => { 
        if(clicks === 3){
            router.push('/en/2/2-3'); 
        }
        handleClick();
    }
    return (
        <section
            className="w-full h-lvh flex flex-col"
            style={{
                backgroundImage: `url(${Background2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex text-white justify-start mt-[200px] items-center w-full h-full flex-col text-center h-[100px]">
                <p>
                    {t("p1.s1")}
                    <br />{t("p1.s2")}
                    <br />{t("p1.s3")}
                </p>
                </motion.div>
                
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}>
            <p className="flex text-white justify-start w-full h-full flex-col text-center mt-5">
                {`${clicks}/3`}
            </p>
            </motion.div>
            
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="flex text-white font-light justify-start mt-[200px] items-center w-full h-full flex-col text-center"
            >
            <div className="flex justify-center items-center h-full w-full ">
                <Image src={potOrange.src} alt="Orange Pot" width={100} height={200} />
                <Image src={potPurple.src} alt="Purple Pot" width={100} height={200} />
                <Image src={potRed.src} alt="Red Pot" width={100} height={100} />
                <Image src={potGreen.src} alt="Green Pot" width={100} height={100} />
                <Image src={potBlue.src} alt="Blue Pot" width={100} height={100} />
                <Image src={potIndigo.src} alt="Indigo Pot" width={100} height={100} />
                <Image src={potPink.src} alt="Pink Pot" width={100} height={100} />
                <Image src={potYellow.src} alt="Yellow Pot" width={100} height={100} />
            </div>
            <div className='flex justify-center items-start h-full mt-10'>
            <button onClick={HandleClick} className=' font-medium bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve_slow  ease-out'>
                    {t("btn")}
                </button>
             </div>
             </motion.div>
        </section>
    );
};

export default Two2;
