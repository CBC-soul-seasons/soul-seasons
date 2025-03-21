import BaseLayout from "@/components/BaseLayout";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  return (
    <BaseLayout locale={locale} messageScope="1-2-4">
      {children}
    </BaseLayout>
  );
};

export default Layout;
