"use client";
import { useLogicCalculation } from "../../../../lib/logicCalculation/logicCalculation"; // Custom hook for calculations
import { useTranslations } from "next-intl";
const Logic = () => {
  const t = useTranslations("");
  const {
    subConceptMotivation,
    subConceptObstacles,
    sortedSubConcepts,
    seasons,
    chapter,
  } = useLogicCalculation();
  return (
    <section className="w-full justify-center text-white items-center h-lvh flex flex-col">
      {/* Render the calculated Sub-Concept Motivation */}
      <h1 className="text-[24px]">Sub Concept Motivation:</h1>
      {subConceptMotivation.length > 0 ? (
        subConceptMotivation.map((concept, idx) => <p key={idx}>{concept}</p>)
      ) : (
        <p>No sub concept found</p>
      )}

      {/* Render the calculated Sub-Concept Obstacles */}
      <h1 className="text-[24px]">Sub Concept Obstacles:</h1>
      {subConceptObstacles.length > 0 ? (
        subConceptObstacles.map((concept, idx) => <p key={idx}>{concept}</p>)
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
      {t(`logic.${seasons}`)}
      <h1 className="text-[24px]">Chapter:</h1>
      {t(`logic.chapter.${chapter}`)}
    </section>
  );
};

export default Logic;
