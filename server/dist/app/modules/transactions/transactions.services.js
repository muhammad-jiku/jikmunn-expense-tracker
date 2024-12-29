"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionServices = void 0;
const transactions_model_1 = require("./transactions.model");
const createTransaction = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transactions_model_1.Transaction.create(payload);
    return result;
});
const getAllTransactions = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transactions_model_1.Transaction.find({});
    const total = yield transactions_model_1.Transaction.countDocuments();
    return {
        meta: {
            total,
        },
        data: result,
    };
});
const deleteTransaction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transactions_model_1.Transaction.findByIdAndDelete(id);
    return result;
});
const getLabels = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transactions_model_1.Transaction.aggregate([
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
});
exports.TransactionServices = {
    createTransaction,
    getAllTransactions,
    deleteTransaction,
    getLabels,
};
