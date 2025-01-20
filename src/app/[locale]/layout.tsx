import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Sounds from "@/components/sounds";
import SoundToggle from "@/components/sound-toggle";
import LangSwitch from "@/components/ui/language";
import { Kanit, Source_Serif_4 } from "next/font/google"; // Import fonts
 

// Load fonts
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif",
});

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Determine font based on locale
  const fontClass = locale === "th" ? "font-th" : "font-en";
  
  return (
    <html lang={locale} >
      <body className= "relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
        <NextIntlClientProvider messages={messages}>
          <Sounds />
          <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
            <LangSwitch />
            <SoundToggle />
          </div>
          <div className={`${fontClass} relative z-10`}>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
