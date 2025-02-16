type SortedWeight = {
  category: string;
  subConcept: string;
  weight: number;
};
const Season = (sortedWeights: SortedWeight[]) => {
  // Get the top two sorted weights.
  const top = sortedWeights.slice(0, 2);
  // Map to the subConcept values and trim any extra whitespace.
  const seasonArray = top.map(item => item.subConcept.trim());

  // Use switch(true) to check for combinations regardless of order.
  switch (true) {
    case seasonArray.includes("Ambitious") && seasonArray.includes("Heart & Home"):
      return "Heart & Home";
    case seasonArray.includes("Ambitious") && seasonArray.includes("Self Love"):
      return "Trophies and Triumphs";
    case seasonArray.includes("Ambitious") && seasonArray.includes("Soulful Impact"):
      return "Inspiring Flames";
    case seasonArray.includes("Heart & Home") && seasonArray.includes("Self Love"):
      return "A Refilled Heart";
    case seasonArray.includes("Heart & Home") && seasonArray.includes("Soulful Impact"):
      return "Ribbons and Paper Boxes";
    case seasonArray.includes("Self Love") && seasonArray.includes("Soulful Impact"):
      return "Life’s Canvas";
    default:
      return seasonArray;
  }
};

export default Season;
