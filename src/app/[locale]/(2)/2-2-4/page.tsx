"use client";
import { useRouter } from "@/i18n/routing";
import { motivationColorMapping } from "@/lib/color";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface motivationGoal {
  index: string;
  name: string;
}

const Scene2_2Page4: React.FC = () => {
  const motivationGoals: motivationGoal[] = JSON.parse(
    getLocalStorageWithFallback("motivationGoal", "[]")
  );

  const colors = motivationGoals.map((motivation) => {
    return motivationColorMapping(motivation.name);
  });

  const stopMotionDuration = 600;
  const [sparkleImgs, setSparkleImgs] = useState<string[]>([]);
  const [pouringImg, setPouringImg] = useState<string>();
  const router = useRouter();
  useEffect(() => {
    for (const [i, color] of colors.entries()) {
      for (let j = 0; j <= 3; j++) {
        setTimeout(
          () => {
            setPouringImg(`/img/motivation/${j}-${color}-1x.webp`);
            if (j === 3) {
              setSparkleImgs((oldSparkleImgs) => {
                const newSparkle = `/img/motivation/sparkle-${color}-1x.webp`;
                return oldSparkleImgs.includes(newSparkle)
                  ? oldSparkleImgs
                  : [...oldSparkleImgs, newSparkle];
              });
            }
            if (i === colors.length - 1 && j === 3) {
              setTimeout(() => {
                router.push("2-3-1");
              }, stopMotionDuration / 2);
            }
          },
          (i * 4 + j + 1) * stopMotionDuration
        );
      }
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {sparkleImgs.map((sparkleImg) => (
        <div
          className="w-[130%] h-[130%] absolute -bottom-[200px]"
          key={`${sparkleImg}-sparkle`}
        >
          <Image src={sparkleImg} fill objectFit="contain" alt="sparkle" />
        </div>
      ))}
      <div className="w-[130%] h-[130%] absolute -bottom-[100px]">
        <Image
          src="/img/motivation/christmas-tree.webp"
          fill
          objectFit="contain"
          alt="christmas-tree"
        />
      </div>
      {pouringImg ? (
        <div className="w-full h-full absolute -bottom-[72px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${pouringImg}-sparkle`}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image src={pouringImg} fill objectFit="contain" alt="pouring" />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
    </div>
  );
};

export default Scene2_2Page4;
