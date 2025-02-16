type SortedWeight = {
    category: string;
    subConcept: string;
    weight: number;
  };
  
  const Chapter = (sortedWeights: SortedWeight[]): string => {
    // Separate items into Motivation and Obstacle (case-insensitive)
    const motivationWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "motivation")
    const obstacleWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "obstacle")
    // If there is no data for either category, default to "กลาง" (Mid)
    if (motivationWeights.length === 0 && obstacleWeights.length === 0) {
      return "middle";
    }
    
    // Use defaults if one of the arrays is empty
    const topMotivation = motivationWeights[0] || { subConcept: "", weight: 0 };
    const topObstacle = obstacleWeights[0] || { subConcept: "", weight: 0 };
  
    // Determine stage based on weighted scores:
    if (topObstacle.weight > topMotivation.weight) {
      return "start";
    } else {
      if (topMotivation.subConcept.trim() === topObstacle.subConcept.trim()) {
        return "end";
      } else {
        return "middle";
      }
    }
  };
  
  export default Chapter;
  