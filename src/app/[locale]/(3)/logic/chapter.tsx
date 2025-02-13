type SortedWeight = {
    category: string;
    subConcept: string;
    weight: number;
  };
  
  const Chapter = (sortedWeights: SortedWeight[]): string => {
    // Separate items into Motivation and Obstacle (case-insensitive)
    const motivationWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "motivation")
      .sort((a, b) => b.weight - a.weight);
  
    const obstacleWeights = sortedWeights
      .filter(item => item.category.toLowerCase() === "obstacle")
      .sort((a, b) => b.weight - a.weight);
  
    // If there is no data for either category, default to "กลาง" (Mid)
    if (motivationWeights.length === 0 && obstacleWeights.length === 0) {
      return "กลาง";
    }
    
    // Use defaults if one of the arrays is empty
    const topMotivation = motivationWeights[0] || { subConcept: "", weight: 0 };
    const topObstacle = obstacleWeights[0] || { subConcept: "", weight: 0 };
  
    // Determine stage based on weighted scores:
    if (topObstacle.weight > topMotivation.weight) {
      return "ต้น";
    } else {
      if (topMotivation.subConcept.trim() === topObstacle.subConcept.trim()) {
        return "บานสะพรั่ง";
      } else {
        return "กลาง";
      }
    }
  };
  
  export default Chapter;
  