import { Category, Chapter } from "../enum";
import { WeightedSubConcept } from "../types";

const ChapterDetermination = (sortedWeights: WeightedSubConcept[]): Chapter => {
  const motivationWeights = sortedWeights.filter(
    (item) => item.category === Category.Motivation
  );
  const obstacleWeights = sortedWeights.filter(
    (item) => item.category === Category.Obstacle
  );

  if (motivationWeights.length === 0 && obstacleWeights.length === 0) {
    return Chapter.Middle;
  }

  const topMotivation = motivationWeights[0] || { subConcept: "", weight: 0 };
  const topObstacle = obstacleWeights[0] || { subConcept: "", weight: 0 };

  if (topObstacle.weight > topMotivation.weight) {
    return Chapter.Start;
  } else if (
    topMotivation.subConcept.trim() === topObstacle.subConcept.trim()
  ) {
    return Chapter.End;
  } else {
    return Chapter.Middle;
  }
};

export default ChapterDetermination;
