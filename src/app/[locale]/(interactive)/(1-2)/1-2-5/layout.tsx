import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, ["1-2-5", "NextButton"])}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;
