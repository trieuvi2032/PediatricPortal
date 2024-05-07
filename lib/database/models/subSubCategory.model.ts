// subSubCategory.model.ts
import { Document, Schema, model, models } from "mongoose";

export interface ISubSubCategory extends Document {
  _id: string;
  name: string;
  subCategoryId: string; // The ID of the parent sub-category
}

const SubSubCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  subCategoryId: { type: String, required: true }, // Reference to the parent sub-category
});

const SubSubCategory =
  models.SubSubCategory || model("SubSubCategory", SubSubCategorySchema);

export default SubSubCategory;
