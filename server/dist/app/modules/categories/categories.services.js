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
exports.CategoryServices = void 0;
const categories_model_1 = require("./categories.model");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categories_model_1.Category.create(payload);
    return result;
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categories_model_1.Category.find({});
    const total = yield categories_model_1.Category.countDocuments();
    return {
        meta: {
            total,
        },
        data: result,
    };
});
exports.CategoryServices = {
    createCategory,
    getAllCategories,
};
