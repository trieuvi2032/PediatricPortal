import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import SubSubCategory from "../database/models/subSubCategory.model";
import SubCategory from "../database/models/subCategory.model";

export const createSubSubCategory = async ({
  subSubCategoryName,
  parentSubCategoryId,
}: CreateSubSubCategoryParams) => {
  try {
    await connectToDatabase();

    // Check if the parent category exists
    const subParentCategory = await SubCategory.findById(parentSubCategoryId);
    if (!subParentCategory) {
      throw new Error("Sub Parent category not found");
    }

    // If the parent category exists, create the new sub-category
    const newSubSubCategory = await SubSubCategory.create({
      name: subSubCategoryName,
      categoryId: parentSubCategoryId,
    });

    return JSON.parse(JSON.stringify(newSubSubCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllSubSubCategories = async () => {
  try {
    await connectToDatabase();

    // Fetch all categories
    const subSubCategories = await SubSubCategory.find();

    return JSON.parse(JSON.stringify(subSubCategories));
  } catch (error) {
    handleError(error);
  }
};
