import { useEffect, useState } from "react";
import { motivationMap } from "./motivations"; 
import { obstacleMapping } from "./obstacles";
import Seasons from "./season";
import Chapter from "./chapter";


// Define the type for motivation.
type Motivation = {
  index: number;
  name: string;
};

// Define the type for weighted sub-concepts.
type WeightedSubConcept = {
  category: "motivation" | "obstacle";
  subConcept: string;
  weight: number;
};

export const useCalculation = (
  motivation: Motivation[],
  obstacles: string[],
  speed: number
) => {

const [sortedSubConcepts, setSortedSubConcepts] = useState<WeightedSubConcept[]>([]);
  const [subConceptMotivation, setSubConceptMotivation] = useState<string[]>([]);
    const [subConceptObstacles, setSubConceptObstacles] = useState<string[]>([]);
    const [seasons, setSeasons] = useState<string | string[]>('');
    const [chapter, setChapter] = useState<string>('');

  useEffect(() => {
    const motivationSubConcepts = motivation.map((mot) => motivationMap[mot.name]);
    const obstacleSubConcepts = obstacles.map((obs) => obstacleMapping[obs]);

    const distinctMotSubConcepts = Array.from(new Set(motivationSubConcepts));
    const distinctObsSubConcepts = Array.from(new Set(obstacleSubConcepts));

    let selectedMotSubConcept: string[] = [];
    let selectedObsSubConcept: string[] = [];

    
    if (distinctMotSubConcepts.length === 2) {
      selectedMotSubConcept = distinctMotSubConcepts;
    } else if (distinctMotSubConcepts.length === 3) {
      selectedMotSubConcept = motivation.slice(0, 2).map((mot) => motivationMap[mot.name]);
    } else {
      selectedMotSubConcept = distinctMotSubConcepts;
    }

    if (distinctObsSubConcepts.length === 2) {
      selectedObsSubConcept = distinctObsSubConcepts.flat();
    } else if (distinctObsSubConcepts.length === 3) {
      selectedObsSubConcept = obstacles.slice(0, 2).map((obs) => obstacleMapping[obs]).flat();
    } else {
      selectedObsSubConcept = distinctObsSubConcepts.flat();
    }
    setSubConceptMotivation(selectedMotSubConcept);
    setSubConceptObstacles(selectedObsSubConcept);
    const motivationWeight = 0.9;            
    const obstacleWeight = 0.1 * speed;        

    // Create weighted objects for each sub-concept.
    const weightedMotivations: WeightedSubConcept[] = selectedMotSubConcept.map(
      (sub) => ({
        category: "motivation",
        subConcept: sub,
        weight: motivationWeight,
      })
    );

    const weightedObstacles: WeightedSubConcept[] = selectedObsSubConcept.map(
      (sub) => ({
        category: "obstacle",
        subConcept: sub,
        weight: obstacleWeight,
      })
    );

    // Combine the two arrays.
    const combinedWeighted = [...weightedMotivations, ...weightedObstacles];

    // Sort from highest to lowest weight.
    const sortedWeight = combinedWeighted.sort((a, b) => b.weight - a.weight);
    
    const season = Seasons(sortedWeight);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const chapter = Chapter(sortedWeight);
    setSortedSubConcepts(combinedWeighted);
    setSeasons(season);
    setChapter(chapter);
    


  }, [motivation, obstacles, speed]);

  return { sortedSubConcepts, subConceptMotivation, subConceptObstacles,seasons,chapter};
};
