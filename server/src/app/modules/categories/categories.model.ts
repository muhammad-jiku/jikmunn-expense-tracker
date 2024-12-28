import { model, Schema } from 'mongoose';
import { ICategory, ICategoryModel } from './categories.interfaces';

const categorySchema = new Schema<ICategory, ICategoryModel>(
  {
    type: {
      type: String,
      required: true,
      default: 'Investment',
    },
    color: {
      type: String,
      required: true,
      default: '#FCBE44',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category: ICategoryModel = model<ICategory, ICategoryModel>(
  'Category',
  categorySchema
);
