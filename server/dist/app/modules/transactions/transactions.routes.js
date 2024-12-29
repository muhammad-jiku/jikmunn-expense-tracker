"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const transactions_controllers_1 = require("./transactions.controllers");
const router = express_1.default.Router();
router.route('/:id').delete(transactions_controllers_1.TransactionControllers.deleteTransaction);
router
    .route('/')
    .post(transactions_controllers_1.TransactionControllers.createTransaction)
    .get(transactions_controllers_1.TransactionControllers.getAllTransactions);
router.route('/labels').get(transactions_controllers_1.TransactionControllers.getLabels);
exports.TransactionRoutes = router;
