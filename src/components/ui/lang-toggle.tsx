"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Button } from "./button";

const LangToggle = () => {
  const locale = useLocale();
  const path = usePathname();

  return (
    <Link href={path} locale={locale === "en" ? "th" : "en"}>
      <Button
        variant="ghost"
        className={cn(
          "h-auto w-auto rounded-[8px] p-2 text-sm font-semibold text-accent"
        )}
      >
        {locale === "en" ? "EN" : "TH"}
      </Button>
    </Link>
  );
};

export default LangToggle;
