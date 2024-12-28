import express from 'express';
import { CategoryRoutes } from '../modules/categories/categories.routes';
import { TransactionRoutes } from '../modules/transactions/transactions.routes';

const routes = express.Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/transactions',
    route: TransactionRoutes,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));

export default routes;
