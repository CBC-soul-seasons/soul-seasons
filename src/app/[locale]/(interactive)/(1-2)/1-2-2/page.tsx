"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page1_2_2 = () => {
  const t = useTranslations("1-2-2");
  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p> TODO:คนสำคัญ : {t("callYou")}</p>
      </motion.div>

      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 2.5 } }}
      >
        <p> TODO:ADD TEXT BOX HERE</p>
        <Link href="1-2-4">
          <Button>{t("next")}</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Page1_2_2;
