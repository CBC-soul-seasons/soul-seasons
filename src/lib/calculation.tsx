import { useEffect, useState } from "react";
import {
  Categories,
  Category,
  Motivation,
  Obstacle,
  Season,
  SeasonsChapter,
} from "./enum";
import SeasonDetermination from "./seasonDetermination";
import ChapterDetermination from "./chapterDetermination";

type WeightedSubConcept = {
  category: Category;
  subConcept: Categories;
  weight: number;
};

const motivationMap: Record<Motivation, Categories> = {
  [Motivation.CareerWork]: Categories.Ambitious,
  [Motivation.Family]: Categories.HeartAndHome,
  [Motivation.RelationshipFriends]: Categories.HeartAndHome,
  [Motivation.SharingContributions]: Categories.SoulfulImpact,
  [Motivation.SelfDevelopment]: Categories.SelfLove,
  [Motivation.FinanceMoney]: Categories.Ambitious,
  [Motivation.Health]: Categories.SelfLove,
  [Motivation.Spiritual]: Categories.SoulfulImpact,
};

const obstacleMapping: Record<Obstacle, Categories | Categories[]> = {
  [Obstacle.NotGoodEnough]: Categories.Ambitious,
  [Obstacle.NotPrioritize]: Categories.HeartAndHome,
  [Obstacle.NotLoveMyself]: Categories.SelfLove,
  [Obstacle.FearNotAccepted]: Categories.SoulfulImpact,
  [Obstacle.TimeManagement]: [Categories.Ambitious, Categories.HeartAndHome],
  [Obstacle.LackConfidence]: [Categories.Ambitious, Categories.SelfLove],
  [Obstacle.LackInspiration]: [Categories.Ambitious, Categories.SoulfulImpact],
  [Obstacle.OverDriven]: [Categories.HeartAndHome, Categories.SelfLove],
  [Obstacle.SocietyPressure]: [
    Categories.HeartAndHome,
    Categories.SoulfulImpact,
  ],
  [Obstacle.OverwhelmedWorld]: [Categories.SelfLove, Categories.SoulfulImpact],
};

export const useCalculation = () => {
  const [sortedSubConcepts, setSortedSubConcepts] = useState<
    WeightedSubConcept[]
  >([]);
  const [subConceptMotivation, setSubConceptMotivation] = useState<
    Categories[]
  >([]);
  const [subConceptObstacles, setSubConceptObstacles] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<Season>();
  const [chapter, setChapter] = useState<SeasonsChapter>();
  const [motivation, setMotivation] = useState<Motivation[]>([]);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [speed, setSpeed] = useState(10);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const storedMotivation = localStorage.getItem("motivationGoal");
    const storedObstacles = localStorage.getItem("currentObstacles");
    const speedClicked = localStorage.getItem("speed");

    if (storedMotivation) {
      try {
        setMotivation(
          JSON.parse(storedMotivation).map((item: any, index: number) => ({
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
        setObstacles(JSON.parse(storedObstacles));
      } catch (error) {
        console.error("Error parsing obstacles:", error);
      }
    }

    if (speedClicked) {
      try {
        setSpeed(JSON.parse(speedClicked));
      } catch (error) {
        console.error("Error parsing speed:", error);
      }
    }
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (!dataLoaded) {
      return;
    }

    const motivationSubConcepts = motivation.map((mot) => motivationMap[mot]);
    const obstacleSubConcepts = obstacles.map((obs) => obstacleMapping[obs]);

    const selectedMotSubConcept = Array.from(
      new Set(motivationSubConcepts)
    ).slice(0, 2);
    const selectedObsSubConcept = Array.from(
      new Set(obstacleSubConcepts.flat())
    ).slice(0, 2);

    setSubConceptMotivation(selectedMotSubConcept);
    setSubConceptObstacles(selectedObsSubConcept);

    const weightedMotivations: WeightedSubConcept[] = selectedMotSubConcept.map(
      (sub) => ({
        category: Category.Motivation,
        subConcept: sub,
        weight: 0.9,
      })
    );

    const weightedObstacles: WeightedSubConcept[] = selectedObsSubConcept.map(
      (sub) => ({
        category: Category.Obstacle,
        subConcept: sub,
        weight: 0.1 * speed,
      })
    );

    const sortedWeight = [...weightedMotivations, ...weightedObstacles].sort(
      (a, b) => b.weight - a.weight
    );
    setSortedSubConcepts(sortedWeight);
    setSeasons(SeasonDetermination(sortedWeight));
    setChapter(ChapterDetermination(sortedWeight));
  }, [motivation, obstacles, speed]);

  return {
    sortedSubConcepts,
    subConceptMotivation,
    subConceptObstacles,
    seasons,
    chapter,
  };
};
