import { notFound } from "next/navigation";
import "../globals.css";
import { PropsWithChildren } from "react";
import AnimatedLayout from "@/components/AnimatedLayout";

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
      <body className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
        <AnimatedLayout fontClass={fontClass}>{children}</AnimatedLayout>
      </body>
    </html>
  );
};

export default LocaleLayout;
