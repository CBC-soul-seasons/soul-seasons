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
    
    // Create a key by joining the subConcepts with a comma.
    const key = seasonArray.join(',');
  
    // Use the key in a switch statement.
    switch (key) {
      case "Ambitious,Heart & Home":
        return "Heart & Home";
      case "Ambitious,Self Love":
        return "Trophies and Triumphs";
      case "Ambitious,Soulful Impact":
        return "Inspiring Flames";
      case "Heart & Home,Self Love":
        return "A Refilled Heart";
      case "Heart & Home,Soulful Impact":
        return "Ribbons and Paper Boxes";
      case "Self Love,Soulful Impact":
        return "Life’s Canvas";
      default:
        return seasonArray;
    }
  };
  
  export default Season;
  