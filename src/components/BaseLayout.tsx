import { pick } from "lodash";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

interface BaseLayoutProps extends PropsWithChildren {
  locale: string;
  messageScope?: string;
}

const BaseLayout = async ({
  children,
  locale,
  messageScope = "base",
}: BaseLayoutProps) => {
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, [messageScope, "base"])}>
      {children}
    </NextIntlClientProvider>
  );
};

export default BaseLayout;
