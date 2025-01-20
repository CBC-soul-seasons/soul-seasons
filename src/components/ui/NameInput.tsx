'use client'
import { useState, useEffect} from 'react';
type Props = {
    placeholder: string;
}
const NameInput:React.FC<Props> =  ({placeholder})=>{
    const [name,setName] = useState(''); 
    
    // useEffect(() => {
    //     const storedName = localStorage.getItem('name'); // Retrieve the value from local storage
    //     if (storedName) {
    //         setName(storedName); // Set it to the state if available
    //     }
    // }, []);

    useEffect(()=>{  
        localStorage.setItem('name',name);
     },[name]);

     const HandleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setName(e.target.value);
     }
    return(
        <div>
            <input 
            onChange={HandleChange} 
            className='font-kanit text-[18px] font-bold w-[205px] h-[41px] rounded-[12px] px-5 opacity-70 placeholder:font-light'  
            type="text"
            placeholder={placeholder} />
        </div>
    )
}

export default NameInput;