// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  photo: string;
};

// ====== CATEGORY PARAMS
declare type CreateCategoryParams = {
  categoryName: string;
};

// ====== SUB-CATEGORY PARAMS
declare type CreateSubCategoryParams = {
  subCategoryName: string;
  parentCategoryId: string; // The ID of the parent category
};

// ====== SUB-SUB-CATEGORY PARAMS
declare type CreateSubSubCategoryParams = {
  subSubCategoryName: string;
  parentSubCategoryId: string; // The ID of the parent sub-category
};

// ====== RESOURCE PARAMS
declare type CreateResourceParams = {
  resource: {
    title: string;
    description: string;
    yearCreated: number; // The year the resource was created
    url: string;
    doc: string;
    subSubcategoryId: string;
  };

  path: string;
};

declare type UpdateResourceParams = {
  resource: {
    _id: string;
    title: string;
    description: string;
    yearCreated?: number; // The year the resource was created
    type: string;
  };
  path: {
    categoryId: string; // The ID of the category the resource belongs to
    subCategoryId: string; // The ID of the sub-category the resource belongs to
    subSubCategoryId: string; // The ID of the sub-sub-category the resource belongs to
  };
};

declare type DeleteResourceParams = {
  resourceId: string;
};

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};
