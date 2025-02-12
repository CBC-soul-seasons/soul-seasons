import { notFound } from "next/navigation";
import "../globals.css";
import Sounds from "@/components/ui/sounds";
import SoundToggle from "@/components/ui/sound-toggle";
import { PropsWithChildren } from "react";
import LangToggle from "@/components/ui/lang-toggle";
import localFont from "next/font/local";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const cloud = localFont({
  src: [
    {
      path: "./fonts/Cloud-Soft-Bold.ttf",
      weight: "bold",
    },
    {
      path: "./fonts/Cloud-Soft-Light.ttf",
      weight: "normal",
    },
  ],
  variable: "--cloud",
});

const LocaleLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  const validLocales = ["en", "th"];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const fontClass = locale === "th" ? "font-th" : "font-en";

  return (
    <html lang={locale} className={`${cloud.variable}`}>
      <body className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
        <Sounds />
        <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
          <LangToggle/>
          <SoundToggle />
        </div>
        <div className={`${fontClass} relative z-10`}>{children}</div>

      </body>
    </html>
  );
};

export default LocaleLayout;
