import { IGenericResponse } from '../../../interfaces/common';
import { ICategory } from './categories.interfaces';
import { Category } from './categories.model';

const createCategory = async (payload: ICategory): Promise<ICategory> => {
  const result = await Category.create(payload);

  return result;
};

const getAllCategories = async (): Promise<IGenericResponse<ICategory[]>> => {
  const result = await Category.find({});

  const total = await Category.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

export const CategoryServices = {
  createCategory,
  getAllCategories,
};
