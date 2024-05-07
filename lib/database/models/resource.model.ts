import { Document, Schema, model, models } from "mongoose";

export interface IResource extends Document {
  title: string;
  description?: string;
  yearCreated?: number; // The year the resource was created
  url?: string;
  doc?: string;
  subSubcategoryId: { _id: string; name: string };
}

const ResourceSchena = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  yearCreated: { type: Number, required: false },
  url: { type: String, required: false },
  doc: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: "SubSubCategory" },
});

const Resource = models.Resource || model("Resource", ResourceSchena);

export default Resource;
