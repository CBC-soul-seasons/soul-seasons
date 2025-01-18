"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";

const interFont = Inter({
  weight: "600",
  subsets: ["greek"],
});

const LangToggle = () => {
  const locale = useLocale();
  const path = usePathname();
  const isEnglish = locale === "en";
  const targetLang = isEnglish ? "th" : "en";
  const currentLangDisplay = isEnglish ? "EN" : "TH";
  const targetLangDisplay = isEnglish ? "TH" : "EN";

  return (
    <Link
      href={path}
      locale={targetLang}
      aria-label={`Switch language to ${targetLang.toUpperCase()}`}
    >
      <div
        className={cn(
          "flex items-center rounded-full bg-[#202A44] p-2 text-white hover:bg-[#2d3b5e] transition-colors",
          interFont.className
        )}
        style={{ width: "80px", height: "40px" }}
        role="button"
      >
        <div
          className={cn(
            "flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white text-[#202A44] text-sm font-semibold transition-transform",
            isEnglish ? "translate-x-0" : "translate-x-[32px]"
          )}
        >
          {targetLangDisplay}
        </div>
        <div
          className={cn(
            "flex-grow flex items-center justify-center text-sm font-semibold"
          )}
        >
          {currentLangDisplay}
        </div>
      </div>
    </Link>
  );
};

export default LangToggle;
