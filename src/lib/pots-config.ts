import { Motivation } from "./enum";

export type PotImage = {
  src: string;
  label: string;
  glow: string;
  motivation: Motivation; // Optional since not all objects have it
};

export const getPotImages = (t: any): { potImagesleft: PotImage[]; potImagesright: PotImage[] } => {
  return {
    potImagesleft: [
      { src: "/icons/pot/potPink.webp", label: t("pots.career_work"), motivation: Motivation.CareerWork, glow: "/icons/potGlow/potPinkGlow.webp" },
      { src: "/icons/pot/potIndigo.webp", label: t("pots.family"), motivation: Motivation.Family, glow: "/icons/potGlow/potIndigoGlow.webp" },
      { src: "/icons/pot/potRed.webp", label: t("pots.relationship_friends"), motivation: Motivation.RelationshipFriends, glow: "/icons/potGlow/potRedGlow.webp" },
      { src: "/icons/pot/potOrange.webp", label: t("pots.sharing_contributions"), motivation: Motivation.SharingContributions, glow: "/icons/potGlow/potOrangeGlow.webp" },
    ],
    potImagesright: [
      { src: "/icons/pot/potBlue.webp", label: t("pots.self_development"),motivation: Motivation.SelfDevelopment, glow: "/icons/potGlow/potBlueGlow.webp" },
      { src: "/icons/pot/potYellow.webp", label: t("pots.finance_money"), motivation: Motivation.FinanceMoney, glow: "/icons/potGlow/potYellowGlow.webp" },
      { src: "/icons/pot/potGreen.webp", label: t("pots.health"), motivation: Motivation.Health, glow: "/icons/potGlow/potGreenGlow.webp" },
      { src: "/icons/pot/potPurple.webp", label: t("pots.spiritual"), motivation: Motivation.Spiritual, glow: "/icons/potGlow/potPurpleGlow.webp" },
    ],
  };
};
