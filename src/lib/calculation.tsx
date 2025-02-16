import { useEffect, useState } from "react";
import { motivationMap } from "./motivations"; 
import { obstacleMapping } from "./obstacles";
import Seasons from "./season";
import Chapter from "./chapter";

type Motivation = {
  index: number;
  name: string;
};

type WeightedSubConcept = {
  category: "motivation" | "obstacle";
  subConcept: string;
  weight: number;
};

export const useCalculation = () => {
  const [sortedSubConcepts, setSortedSubConcepts] = useState<WeightedSubConcept[]>([]);
  const [subConceptMotivation, setSubConceptMotivation] = useState<string[]>([]);
  const [subConceptObstacles, setSubConceptObstacles] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string | string[]>('');
  const [chapter, setChapter] = useState<string>('');
  const [motivation, setMotivation] = useState<Motivation[]>([]);
  const [obstacles, setObstacles] = useState<string[]>([]);
  const [speed, setSpeed] = useState(10);

  // Effect to load data from localStorage once on mount.
  useEffect(() => {
    const storedMotivation = localStorage.getItem('motivationGoal');
    const storedObstacles = localStorage.getItem('goal');
    const speedClicked = localStorage.getItem('speed');

    if (storedMotivation) {
      try {
        const parsedMotivation = JSON.parse(storedMotivation);
        setMotivation(
          parsedMotivation.map((item: any, index: number) => ({
            ...item,
            index,
          }))
        );
      } catch (error) {
        console.error("Error parsing motivation:", error);
      }
    }

    if (storedObstacles) {
      try {
        const parsedObstacles = JSON.parse(storedObstacles);
        setObstacles(parsedObstacles);
      } catch (error) {
        console.error("Error parsing obstacles:", error);
      }
    }

    if (speedClicked) {
      try {
        const parsedSpeed = JSON.parse(speedClicked);
        setSpeed(parsedSpeed);
      } catch (error) {
        console.error("Error parsing speed:", error);
      }
    }
  }, []); // Run only once on mount.

  // Effect to handle calculations based on state changes.
  useEffect(() => {
    const motivationSubConcepts = motivation.map((mot) => motivationMap[mot.name]);
    const obstacleSubConcepts = obstacles.map((obs) => obstacleMapping[obs]);

    const distinctMotSubConcepts = Array.from(new Set(motivationSubConcepts));
    const distinctObsSubConcepts = Array.from(new Set(obstacleSubConcepts));

    let selectedMotSubConcept: string[] = [];
    let selectedObsSubConcept: string[] = [];

    switch (distinctMotSubConcepts.length) {
      case 2:
        selectedMotSubConcept = distinctMotSubConcepts;
        break;
      case 3:
        selectedMotSubConcept = motivation
          .slice(0, 2)
          .map((mot) => motivationMap[mot.name]);
        break;
      default:
        selectedMotSubConcept = distinctMotSubConcepts;
        break;
    }
    
    switch (distinctObsSubConcepts.length) {
      case 2:
        selectedObsSubConcept = distinctObsSubConcepts.flat();
        break;
      case 3:
        selectedObsSubConcept = obstacles
          .slice(0, 2)
          .map((obs) => obstacleMapping[obs])
          .flat();
        break;
      default:
        selectedObsSubConcept = distinctObsSubConcepts.flat();
        break;
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
    const chapters = Chapter(sortedWeight);
    
    setSortedSubConcepts(sortedWeight);
    setSeasons(season);
    setChapter(chapters);
  }, [motivation, obstacles, speed]); // Run whenever these dependencies change.

  return { sortedSubConcepts, subConceptMotivation, subConceptObstacles, seasons, chapter };
};
