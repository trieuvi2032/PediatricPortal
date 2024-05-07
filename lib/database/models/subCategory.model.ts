// subCategory.model.ts
import { Document, Schema, model, models } from "mongoose";

export interface ISubCategory extends Document {
  _id: string;
  name: string;
  categoryId: string; // The ID of the parent category
}

const SubCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  categoryId: { type: String, required: true }, // Reference to the parent category
});

const SubCategory =
  models.SubCategory || model("SubCategory", SubCategorySchema);

export default SubCategory;
