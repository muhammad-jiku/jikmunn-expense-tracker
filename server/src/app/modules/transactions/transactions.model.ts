import { model, Schema } from 'mongoose';
import { ITransaction, ITransactionModel } from './transactions.interfaces';

const transactionSchema = new Schema<ITransaction, ITransactionModel>(
  {
    name: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    type: {
      type: String,
      required: true,
      default: 'Investment',
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Transaction: ITransactionModel = model<
  ITransaction,
  ITransactionModel
>('Transaction', transactionSchema);
