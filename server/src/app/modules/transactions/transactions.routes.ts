import express from 'express';
import { TransactionControllers } from './transactions.controllers';

const router = express.Router();

router.route('/:id').delete(TransactionControllers.deleteTransaction);

router
  .route('/')
  .post(TransactionControllers.createTransaction)
  .get(TransactionControllers.getAllTransactions);

router.route('/labels').get(TransactionControllers.getLabels);

export const TransactionRoutes = router;
