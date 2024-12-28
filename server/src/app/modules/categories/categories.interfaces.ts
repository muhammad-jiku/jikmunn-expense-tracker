import { Model } from 'mongoose';

export interface ICategory {
  type: string;
  color: string;
}

export type ICategoryModel = Model<ICategory, Record<string, unknown>>;
