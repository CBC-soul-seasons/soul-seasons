import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import "tailwindcss/tailwind.css";
import Sounds from "@/components/sounds";
import SoundToggle from "@/components/sound-toggle";
import LangToggle from "@/components/lang-toggle";

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

  return (
    <html lang={locale}>
      <body className="relative mx-auto min-h-screen w-full max-w-[393px] overflow-x-hidden overscroll-none">
        <NextIntlClientProvider messages={messages}>
          <Sounds />
          <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
            <LangToggle />
            <SoundToggle />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
