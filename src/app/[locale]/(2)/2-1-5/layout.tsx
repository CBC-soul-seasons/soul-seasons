import BaseLayout from "@/components/BaseLayout";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  return (
    <BaseLayout locale={locale} messageScope="2-1-5">
      {children}
    </BaseLayout>
  );
};

export default Layout;
