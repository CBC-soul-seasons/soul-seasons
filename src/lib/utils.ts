import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getDynamicFontSize = (locale: string, length: number) => {
  if (locale === "th") {
    if (length > 400) {
      return "0.9rem";
    } else if (length > 350) {
      return "0.95rem";
    } else if (length > 300) {
      return "1rem";
    } else {
      return "1.1rem";
    }
  } else {
    if (length > 500) {
      return "0.8rem";
    } else if (length > 400) {
      return "0.85rem";
    } else if (length > 300) {
      return "0.9rem";
    } else {
      return "1rem";
    }
  }
};
