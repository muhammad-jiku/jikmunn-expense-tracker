import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { ICategory } from './categories.interfaces';
import { CategoryServices } from './categories.services';

const createCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ...categoryData } = await req.body;
      const result = await CategoryServices.createCategory(categoryData);

      sendResponse<ICategory>(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Category created successfully!',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

const getAllCategories = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CategoryServices.getAllCategories();

      sendResponse<ICategory[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All categories data retrieved successfully!',
        meta: result.meta,
        data: result.data,
      });
    } catch (error) {
      return next(error);
    }
  }
);

export const CategoryControllers = {
  createCategory,
  getAllCategories,
};
