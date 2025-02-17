"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import Image from "next/image";

const Page5_1_2 = () => {
  const t = useTranslations("5-1-2");
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );
  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <Image
        src="/background/5-1-2.png"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <motion.div
        className="text-center text-white absolute top-[77%] "
        style={{
          fontSize: "18px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson}: {t("p1.s1")}
        </p>
      </motion.div>

      <DelayedFullScreenLink href="5-1-3" delay={2000} />
    </div>
  );
};

export default Page5_1_2;
