import { Categories, Season } from "../enum";
import { WeightedSubConcept } from "../types";

const SeasonDetermination = (sortedWeights: WeightedSubConcept[]): Season => {
  const top = sortedWeights.slice(0, 2);
  const seasonArray = top.map((item) => item.subConcept.trim());
  switch (true) {
    case seasonArray.includes(Categories.Ambitious) &&
      seasonArray.includes(Categories.HeartAndHome):
      return Season.HeartAndHome;
    case seasonArray.includes(Categories.Ambitious) &&
      seasonArray.includes(Categories.SelfLove):
      return Season.TrophiesAndTriumphs;
    case seasonArray.includes(Categories.Ambitious) &&
      seasonArray.includes(Categories.SoulfulImpact):
      return Season.InspiringFlames;
    case seasonArray.includes(Categories.HeartAndHome) &&
      seasonArray.includes(Categories.SelfLove):
      return Season.ARefilledHeart;
    case seasonArray.includes(Categories.HeartAndHome) &&
      seasonArray.includes(Categories.SoulfulImpact):
      return Season.RibbonsAndPaperBoxes;
    case seasonArray.includes(Categories.SelfLove) &&
      seasonArray.includes(Categories.SoulfulImpact):
      return Season.LifesCanvas;
    default:
      return Season.LifesCanvas;
  }
};

export default SeasonDetermination;
