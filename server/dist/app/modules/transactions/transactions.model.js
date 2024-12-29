"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Transaction = (0, mongoose_1.model)('Transaction', transactionSchema);
