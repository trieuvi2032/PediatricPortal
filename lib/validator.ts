import * as z from "zod";

export const resourceFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  imageUrl: z.string(),
  categoryId: z.string(),
  subCategoryId: z.string(),
  subSubCategoryId: z.string(),
  url: z.string().optional(),
  pdf: z.string().optional(),
});
