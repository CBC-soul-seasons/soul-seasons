"use client";

import { backgroundMapConfig } from "@/lib/bg-config";
import { usePathname, useRouter } from "@/i18n/routing";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import AnimatedImage from "./animated-image";
import { useBackgroundStore } from "@/store/background";

const InteractiveBackground = () => {
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string>();
  const { backgroundState } = useBackgroundStore();
  useEffect(() => {
    switch (page) {
      case "3-2-2":
      case "3-2-3":
      case "3-2-4":
      case "3-2-5":
      case "3-2-6":
      case "3-2-7":
      case "3-2-8":
      case "3-2-9":
      case "3-2-10":
      case "3-2-11":
        let imageIndex = 0; // Track the current image index
        const stopMotionInterval = setInterval(() => {
          // Update the background image
          setBgImgSrc(backgroundMapConfig[page].image[imageIndex]);

          // Move to the next image, looping back to the start if necessary
          imageIndex =
            (imageIndex + 1) % backgroundMapConfig[page].image.length;
        }, backgroundMapConfig[page].stopMotionDuration);

        // Clear interval when component unmounts (optional cleanup)
        return () => clearInterval(stopMotionInterval);
      case "1-4-9":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("2-1-1");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;
      case "2-2-1":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("2-2-2");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;
      case "2-3-5":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("3-1-1");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;

      case "2-7":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("2-8");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;
      case "2-9":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("2-10");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;
      case "3-2-12":
        setBgImgSrc(backgroundState || "/background/3-2-11_3.gif");
        break;
      case "3-3-7":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("4-1-1");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;

      case "4-1-1":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("4-1-4");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;
      case "4-1-16":
        backgroundMapConfig[page].image.forEach(
          (image: SetStateAction<string | undefined>, index: number) => {
            setTimeout(() => {
              setBgImgSrc(image);
              if (index === backgroundMapConfig[page].image.length - 1) {
                setTimeout(() => {
                  router.push("5-1-1");
                }, backgroundMapConfig[page].stopMotionDuration / 2);
              }
            }, index * backgroundMapConfig[page].stopMotionDuration);
          }
        );
        break;

      default:
        setBgImgSrc(backgroundMapConfig[page].image);
        break;
    }
  }, [page, router, backgroundState]);

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
