"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useMemo, useState } from "react";
import AnimatedImage from "./animated-image";

const InteractiveBackground = () => {
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string>();

  useEffect(() => {
    switch (page) {
      case "2-7":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("2-8");
              }, backgroundMapConfig[page].stopMotionDuration / 2);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "2-9":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("2-10");
              }, backgroundMapConfig[page].stopMotionDuration / 2);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "1-4-9":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("2-1-1");
              }, backgroundMapConfig[page].stopMotionDuration / 2);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "3-3-7":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("4-1-1");
              }, backgroundMapConfig[page].stopMotionDuration / 2);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;

      default:
        setBgImgSrc(backgroundMapConfig[page].image);
        break;
    }
  }, [page, router]);

  const imagePreloadSrc = useMemo(() => {
    const newImagePreloadSrc = backgroundMapConfig[page].imagePreload;
    return newImagePreloadSrc;
  }, [page]);
  return (
    <>
      {bgImgSrc && (
        <AnimatedImage
          src={bgImgSrc}
          preloadSrcs={imagePreloadSrc}
          alt="background-image"
          loading="eager"
          fill
          className="relative -z-50 object-cover"
        />
      )}
    </>
  );
};

export default InteractiveBackground;
