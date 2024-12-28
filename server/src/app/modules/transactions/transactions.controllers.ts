import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { ILabel, ITransaction } from './transactions.interfaces';
import { TransactionServices } from './transactions.services';

const createTransaction = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ...transactionData } = await req.body;
      const result =
        await TransactionServices.createTransaction(transactionData);

      sendResponse<ITransaction>(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Transaction created successfully!',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

const getAllTransactions = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await TransactionServices.getAllTransactions();

      sendResponse<ITransaction[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All transactions data retrieved successfully!',
        meta: result.meta,
        data: result.data,
      });
    } catch (error) {
      return next(error);
    }
  }
);

const deleteTransaction = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = await req.body;
      const result = await TransactionServices.deleteTransaction(id);

      sendResponse<ITransaction>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Transaction data deleted successfully!',
        data: result,
      });
    } catch (error) {
      return next(error);
    }
  }
);

const getLabels = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await TransactionServices.getLabels();

      sendResponse<ILabel[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All labels data retrieved successfully!',
        meta: result.meta,
        data: result.data,
      });
    } catch (error) {
      return next(error);
    }
  }
);

export const TransactionControllers = {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getLabels,
};
