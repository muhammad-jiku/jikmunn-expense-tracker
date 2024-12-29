"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Category = (0, mongoose_1.model)('Category', categorySchema);
