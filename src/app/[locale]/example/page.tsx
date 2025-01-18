"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Page = () => {
  const t = useTranslations("Example");

  return (
    <div className="absolute h-full w-full bg-cover bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex flex-col items-center text-center text-base text-woh-black"
      >
        <p className="mt-2 w-80 text-woh-black">{t("title")}</p>

        <div className="absolute bottom-[10vh]">
          <Link href="/1-2">
            <Button variant="default">Button</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
