"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import NextButton from "@/components/ui/NextButton";
import { Share2 } from "lucide-react";
import { useLogicCalculation } from "@/lib/logicCalculation/logicCalculation";
import { Season, Chapter } from "@/lib/enum";

const chapterMap: Record<Chapter, string> = {
  [Chapter.Start]: "1",
  [Chapter.Middle]: "2",
  [Chapter.End]: "3",
};

const seasonMap: Record<Season, string> = {
  [Season.InspiringFlames]: "1",
  [Season.LifesCanvas]: "2",
  [Season.HeartAndHome]: "3",
  [Season.RibbonsAndPaperBoxes]: "4",
  [Season.TrophiesAndTriumphs]: "5",
  [Season.ARefilledHeart]: "6",
};

const Scene7_2: React.FC = () => {
  const locale = useLocale();
  const [result, setResult] = useState<string>();
  const { seasons, chapter } = useLogicCalculation();
  const DOWNLOAD_FILENAME = "results.jpeg";

  const shareImage = async () => {
    if (!result) {
      return;
    }

    const r2BaseUrl = "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev";
    const directUrl = new URL(result, r2BaseUrl).toString();

    const response = await fetch(directUrl);
    const dataBlob = await response.blob();

    const image = new File([dataBlob], DOWNLOAD_FILENAME, {
      type: dataBlob.type,
    });
    const shareData: ShareData = {
      title: "Soul Seasons",
      text: "Soul Seasons",
      files: [image],
    };

    try {
      navigator.share(shareData);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  useEffect(() => {
    const seasonsNo = seasons ? seasonMap[seasons] : "1";
    const chapterNo = chapter ? chapterMap[chapter] : "middle";

    setResult(`/img/results-${locale}/D 7-2-${seasonsNo}-${chapterNo}.webp`);
  }, [seasons, chapter]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="relative z-10 mb-4 aspect-[1916/3408] h-[571px]">
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="absolute inset-0 h-full w-full overflow-hidden rounded-[20px]"
          >
            <Image
              src={result}
              alt="Results"
              objectFit="contain"
              fill
              className="h-full w-full"
            />
          </motion.div>
        )}
      </div>
      <div className="absolute inset-x-0 top-[84%] z-10 m-auto">
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="mb-4 flex justify-center space-x-3"
          >
            <a href={result} download={DOWNLOAD_FILENAME}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 25">
                  <circle
                    id="Ellipse 30"
                    cx="22"
                    cy="22"
                    r="22"
                    fill="#F8F8F7"
                  />
                  <g id="&#240;&#159;&#166;&#134; icon &#34;download outline&#34;">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M31.625 29.1895H12.375C11.6156 29.1895 11 29.7688 11 30.4836C11 31.1983 11.6156 31.7777 12.375 31.7777H31.625C32.3844 31.7777 33 31.1983 33 30.4836C33 29.7688 32.3844 29.1895 31.625 29.1895Z"
                        fill="#182649"
                      />
                      <path
                        id="Vector_2"
                        d="M22.0019 25.3065C21.7169 25.3085 21.4382 25.2271 21.2044 25.0735L15.7044 21.4242C15.408 21.2262 15.2069 20.9259 15.1451 20.5888C15.0832 20.2518 15.1657 19.9054 15.3744 19.6253C15.4787 19.4854 15.6113 19.3662 15.7647 19.2748C15.9181 19.1833 16.0892 19.1214 16.2682 19.0925C16.4472 19.0636 16.6304 19.0684 16.8074 19.1065C16.9844 19.1447 17.1517 19.2155 17.2994 19.3148L22.0019 22.4077L26.6769 19.0948C26.9687 18.8888 27.3354 18.8004 27.6964 18.8489C28.0574 18.8975 28.3831 19.079 28.6019 19.3536C28.8207 19.6282 28.9147 19.9733 28.8631 20.3131C28.8116 20.6528 28.6187 20.9594 28.3269 21.1653L22.8269 25.0477C22.5889 25.2157 22.2995 25.3065 22.0019 25.3065Z"
                        fill="#182649"
                      />
                      <path
                        id="Vector_3"
                        d="M22 22.7184C21.6353 22.7184 21.2856 22.5821 21.0277 22.3394C20.7699 22.0967 20.625 21.7675 20.625 21.4243V11.0715C20.625 10.7282 20.7699 10.3991 21.0277 10.1564C21.2856 9.91369 21.6353 9.77734 22 9.77734C22.3647 9.77734 22.7144 9.91369 22.9723 10.1564C23.2301 10.3991 23.375 10.7282 23.375 11.0715V21.4243C23.375 21.7675 23.2301 22.0967 22.9723 22.3394C22.7144 22.5821 22.3647 22.7184 22 22.7184Z"
                        fill="#182649"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <button
              onClick={shareImage}
              className="bg-white rounded-full size-[44px] flex items-center justify-center"
            >
              <Share2 className="w-6 h-6 text-primaryblue" />
            </button>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className="flex justify-center"
        >
          <NextButton url="7-3-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Scene7_2;
