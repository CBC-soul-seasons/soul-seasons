'use client'
import Background2 from '../../../img/background/2.png';
import { useRouter } from "next/navigation"; // Use next/navigation in App Router

const Scene2 = () => {
    const router = useRouter();

    const HandleClick = () => { 
        router.push('/en/2/2-1'); 
    };

    return (
        <section onClick={HandleClick} className='w-full h-lvh flex flex-col'style={{ backgroundImage: `url(${Background2.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
    );
};

export default Scene2;
