'use client';
import { useState } from "react";

const LangSwitch = () => {
    const [chooseLang, setChooseLang] = useState('EN');
    const [sound, setSound] = useState(true);

    const HandleClick = (lang: string) => {
        setChooseLang(lang); // Update the language
    }
   

    return (
        <div className="rounded-2xl bg-primaryblue flex w-[69px] h-[37px] justify-center items-center gap-1">
            {/* TH Language */}
            {chooseLang === 'TH' ? (
                <div
                    className="rounded-full bg-white flex h-[29px] w-[29px] justify-center items-center cursor-pointer"
                >
                    <h1>TH</h1>
                </div>
            ) : (
                <h1
                    className="text-white cursor-pointer"
                    onClick={() => HandleClick('TH')}
                >
                    TH
                </h1>
            )}

            {/* EN Language */}
            {chooseLang === 'EN' ? (
                <div
                    className="rounded-full bg-white flex h-[29px] w-[29px] justify-center items-center cursor-pointer"
                >
                    <h1>EN</h1>
                </div>
            ) : (
                <h1
                    className="text-white cursor-pointer"
                    onClick={() => HandleClick('EN')}
                >
                    EN
                </h1>
            )}
        </div>
    );
};

export default LangSwitch;
