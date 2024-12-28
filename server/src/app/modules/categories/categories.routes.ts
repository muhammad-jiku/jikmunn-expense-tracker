import express from 'express';
import { CategoryControllers } from './categories.controllers';

const router = express.Router();

router
  .route('/')
  .post(CategoryControllers.createCategory)
  .get(CategoryControllers.getAllCategories);

export const CategoryRoutes = router;
