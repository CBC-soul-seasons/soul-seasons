"use client";
import { useLogicCalculation } from "@/lib/logicCalculation/logicCalculation";
import { seasonImg, Season, Chapter } from "@/lib/enum";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";

const Scene7_1_4 = () => {
  const { seasons, chapter } = useLogicCalculation();
  const t = useTranslations(`7-1-4`);
  const locale = useLocale();
  const [blur, setBlur] = useState(true);
  const [nextPage, setNextPage] = useState("7-1-7-1");

  // Remove blur effect after 1 second
  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);

  useMemo(() => {
    switch (chapter) {
      case Chapter.Start:
        setNextPage("7-1-7-1");
        break;
      case Chapter.Middle:
        setNextPage("7-1-7-2");
        break;
      case Chapter.End:
        setNextPage("7-1-7-3");
        break;
      default:
    }
  }, [chapter]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {seasons && (
        <div
          className={`${seasons === Season.LifesCanvas ? "mt-[80px]" : "mt-16"} ml-6 flex w-full min-h-[300px] justify-center items-center flex-col`}
        >
          <div className="w-full gap-3 h-auto flex justify-center items-center font-light text-primaryblue">
            <div className="text-[18px] font-bold h-auto flex flex-col items-center justify-center">
              {/* First Image with Blur Effect */}
              <img
                src={seasonImg[seasons]["img"][0]}
                alt="7-1-4"
                className={`${seasonImg[seasons]["w"][0]} 
                                   ${seasonImg[seasons]["h"][0]} 
                                   ${blur ? "filter blur-sm dissolve" : ""}`}
              />
              <p className={`${blur ? "filter blur-sm dissolve" : ""}`}>
                {t(`title.${seasons}.s1`)}
              </p>
            </div>
            <div className="text-[14px] h-auto font-light text-primaryblue">
              <p
                className={`text-center ${blur ? "filter blur-sm dissolve" : ""}`}
              >
                {t(`p1.${seasons}.s1`)}
                <br /> {t(`p1.${seasons}.s2`)}
                <br /> {t(`p1.${seasons}.s3`)}
              </p>
            </div>
          </div>

          <div className="w-full gap-8 pl-8 h-auto flex justify-center items-center font-light text-primaryblue">
            <div className="text-[14px] h-auto font-light text-primaryblue">
              <p
                className={`text-center ${blur ? "filter blur-sm dissolve" : ""}`}
              >
                {t(`p2.${seasons}.s1`)}
                <br /> {t(`p2.${seasons}.s2`)}
                <br /> {t(`p2.${seasons}.s3`)}
              </p>
            </div>
            <div
              className={`${
                [
                  Season.TrophiesAndTriumphs,
                  Season.LifesCanvas,
                  Season.ARefilledHeart,
                  Season.RibbonsAndPaperBoxes,
                ].includes(seasons)
                  ? "text-[18px] font-bold  flex flex-col items-center justify-center"
                  : "text-[18px] font-bold flex items-center justify-center"
              }`}
            >
              {/* Second Image with Blur Effect */}
              <img
                src={seasonImg[seasons as keyof typeof seasonImg]["img"][1]}
                alt="7-1-4"
                className={`
                            ${seasonImg[seasons as keyof typeof seasonImg]?.["w"][1]} 
                            ${seasonImg[seasons as keyof typeof seasonImg]?.["h"][1]} 
                            ${
                              [
                                Season.TrophiesAndTriumphs,
                                Season.LifesCanvas,
                                Season.ARefilledHeart,
                                Season.RibbonsAndPaperBoxes,
                              ].includes(seasons)
                                ? "" // No additional class needed
                                : "relative w-[75px] h-auto bottom-6"
                            }
                            ${blur ? "filter blur-sm dissolve" : ""}
                          `}
              />

              <p className={`${blur ? "filter blur-sm dissolve" : ""}`}>
                {t(`title.${seasons}.s2`)}
              </p>
            </div>
          </div>

          <div className="mt-3 w-full h-auto flex justify-center items-center font-light text-primaryblue">
            <p
              className={`text-[14px] text-center font-light text-primaryblue ${blur ? "filter blur-sm dissolve" : ""}`}
            >
              {t(`p3.${seasons}.s1`)}
              <br /> {t(`p3.${seasons}.s2`)}
              <br /> {t(`p3.${seasons}.s3`)}
              <br /> {t(`p3.${seasons}.s4`)}
              <br /> {t(`p3.${seasons}.s5`)}
              <br /> {t(`p3.${seasons}.s6`)}
              <br /> {t(`p3.${seasons}.s7`)}
              <br /> {t(`p3.${seasons}.s8`)}
              {seasons === Season.LifesCanvas && locale === "en" && (
                <>
                  <br /> {t(`p3.${seasons}.s9`)}
                  <br /> {t(`p3.${seasons}.s10`)}
                  <br /> {t(`p3.${seasons}.s11`)}
                </>
              )}
            </p>
          </div>
        </div>
      )}
      <DelayedFullScreenLink href={nextPage} delay={2000} />
    </section>
  );
};

export default Scene7_1_4;
