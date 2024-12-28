import { Model } from 'mongoose';

export interface ITransaction {
  name: string;
  type: string;
  amount: number;
  date?: Date;
}

export interface ILabel extends ITransaction {
  color: string;
}

export type ITransactionModel = Model<ITransaction, Record<string, unknown>>;
