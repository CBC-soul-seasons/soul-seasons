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
      { src: "/icons/pot/potPink.png", label: t("pots.career_work"), motivation: Motivation.CareerWork, glow: "/icons/potGlow/potPinkGlow.png" },
      { src: "/icons/pot/potIndigo.png", label: t("pots.family"), motivation: Motivation.Family, glow: "/icons/potGlow/potIndigoGlow.png" },
      { src: "/icons/pot/potRed.png", label: t("pots.relationship_friends"), motivation: Motivation.RelationshipFriends, glow: "/icons/potGlow/potRedGlow.png" },
      { src: "/icons/pot/potOrange.png", label: t("pots.sharing_contributions"), motivation: Motivation.SharingContributions, glow: "/icons/potGlow/potOrangeGlow.png" },
    ],
    potImagesright: [
      { src: "/icons/pot/potBlue.png", label: t("pots.self_development"),motivation: Motivation.SelfDevelopment, glow: "/icons/potGlow/potBlueGlow.png" },
      { src: "/icons/pot/potYellow.png", label: t("pots.finance_money"), motivation: Motivation.FinanceMoney, glow: "/icons/potGlow/potYellowGlow.png" },
      { src: "/icons/pot/potGreen.png", label: t("pots.health"), motivation: Motivation.Health, glow: "/icons/potGlow/potGreenGlow.png" },
      { src: "/icons/pot/potPurple.png", label: t("pots.spiritual"), motivation: Motivation.Spiritual, glow: "/icons/potGlow/potPurpleGlow.png" },
    ],
  };
};
