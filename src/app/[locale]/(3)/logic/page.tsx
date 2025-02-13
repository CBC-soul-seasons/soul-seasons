'use client'
import { useEffect, useState } from "react";
import { useCalculation } from "./calculation"; // Custom hook for calculations

// Define your types (optional, but useful)
type Motivation = {
  index: number;
  name: string;
};

const Logic = () => {
  // Initialize state with proper types
  const [motivation, setMotivation] = useState<Motivation[]>([]);
  const [obstacles, setObstacles] = useState<string[]>([]);
  const [speed, setSpeed] = useState(1);
//   speed need to get from localstorage

  useEffect(() => {
    // Retrieve JSON strings from localStorage
    const storedMotivation = localStorage.getItem('motivationGoal');
    const storedObstacles = localStorage.getItem('goal');

    if (storedMotivation) {
      try {
        const parsedMotivation = JSON.parse(storedMotivation);
        // Optionally, add an index if needed.
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
  }, []);

  // Destructure the returned object from useCalculation
  const { subConceptMotivation, subConceptObstacles, sortedSubConcepts,seasons,chapter } = useCalculation(motivation, obstacles, speed);

  return (
    <section className="w-full justify-center text-white items-center h-lvh flex flex-col">
      {/* Render the calculated Sub-Concept Motivation */}
      <h1 className="text-[24px]">Sub Concept Motivation:</h1>
      {subConceptMotivation.length > 0 ? (
        subConceptMotivation.map((concept, idx) => (
          <p key={idx}>{concept}</p>
        ))
      ) : (
        <p>No sub concept found</p>
      )}

      {/* Render the calculated Sub-Concept Obstacles */}
      <h1 className="text-[24px]">Sub Concept Obstacles:</h1>
      {subConceptObstacles.length > 0 ? (
        subConceptObstacles.map((concept, idx) => (
          <p key={idx}>{concept}</p>
        ))
      ) : (
        <p>No sub concept found</p>
      )}

      {/* Render the sorted sub concepts (combining both categories) */}
      <h1 className="text-[24px]">Sorted Sub Concepts:</h1>
      {sortedSubConcepts && sortedSubConcepts.length > 0 ? (
        sortedSubConcepts.map((item, idx) => (
          <p key={idx}>
            {item.subConcept} (Category: {item.category}, Weight: {item.weight})
          </p>
        ))
      ) : (
        <p>No sorted sub concepts found</p>
      )}
       <h1 className="text-[24px]">Season:</h1>
        {seasons}
        <h1 className="text-[24px]">Chapter:</h1>
        {chapter}
    </section>
  );
};

export default Logic;
