import { IGenericResponse } from '../../../interfaces/common';
import { ILabel, ITransaction } from './transactions.interfaces';
import { Transaction } from './transactions.model';

const createTransaction = async (
  payload: ITransaction
): Promise<ITransaction> => {
  const result = await Transaction.create(payload);

  return result;
};

const getAllTransactions = async (): Promise<
  IGenericResponse<ITransaction[]>
> => {
  const result = await Transaction.find({});

  const total = await Transaction.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const deleteTransaction = async (id: string): Promise<ITransaction | null> => {
  const result = await Transaction.findByIdAndDelete(id);

  return result;
};

const getLabels = async (): Promise<IGenericResponse<ILabel[]>> => {
  const result = await Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'categories_info',
      },
    },
    {
      $unwind: '$categories_info',
    },
  ]);

  const total = result.length;

  const data = result.map((v) => ({
    _id: v._id,
    name: v.name,
    type: v.type,
    amount: v.amount,
    color: v.categories_info['color'],
  }));

  return {
    meta: {
      total,
    },
    data,
  };
};

export const TransactionServices = {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getLabels,
};
