import { Categories, Category } from "./enum";

export type WeightedSubConcept = {
  category: Category;
  subConcept: Categories;
  weight: number;
};
