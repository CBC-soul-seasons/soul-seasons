import { Motivation } from "./enum";

// available colors: blue, yellow, purple, green, red, orange, pink, cyan
export const motivationColorMapping = (motivation: string): string => {
  const colorMap: Record<string, string> = {
    [Motivation.Family]: "blue",
    [Motivation.FinanceMoney]: "yellow",
    [Motivation.Spiritual]: "purple",
    [Motivation.Health]: "green",
    [Motivation.RelationshipFriends]: "red",
    [Motivation.SharingContributions]: "orange",
    [Motivation.CareerWork]: "pink",
    [Motivation.SelfDevelopment]: "cyan",
  };

  return colorMap[motivation] || "blue";
};
