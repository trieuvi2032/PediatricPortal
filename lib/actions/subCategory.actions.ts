import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import SubCategory from "../database/models/subCategory.model";
import Category from "../database/models/category.model";

export const createSubCategory = async ({
  subCategoryName,
  parentCategoryId,
}: CreateSubCategoryParams) => {
  try {
    await connectToDatabase();

    // Check if the parent category exists
    const parentCategory = await Category.findById(parentCategoryId);
    if (!parentCategory) {
      throw new Error("Parent category not found");
    }

    // If the parent category exists, create the new sub-category
    const newSubCategory = await SubCategory.create({
      name: subCategoryName,
      categoryId: parentCategoryId,
    });

    return JSON.parse(JSON.stringify(newSubCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllSubCategories = async () => {
  try {
    await connectToDatabase();

    // Fetch all categories
    const subCategories = await SubCategory.find();

    return JSON.parse(JSON.stringify(subCategories));
  } catch (error) {
    handleError(error);
  }
};
