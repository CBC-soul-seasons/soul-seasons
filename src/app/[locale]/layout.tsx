import { notFound } from "next/navigation";
import "../globals.css";
import { PropsWithChildren } from "react";
import AnimatedLayout from "@/components/AnimatedLayout";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  const validLocales = ["en", "th"];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const fontClass = locale === "th" ? "font-th" : "font-en";

  return (
    <html lang={locale}>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-XXFTSN0KNW"}
      />
      <body className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
        <AnimatedLayout fontClass={fontClass}>{children}</AnimatedLayout>
      </body>
    </html>
  );
};

export default LocaleLayout;
