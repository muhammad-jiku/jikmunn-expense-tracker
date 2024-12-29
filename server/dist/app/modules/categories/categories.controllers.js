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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../../shared/catchAsync");
const sendResponse_1 = require("../../../shared/sendResponse");
const categories_services_1 = require("./categories.services");
const createCategory = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = __rest(yield req.body, []);
        const result = yield categories_services_1.CategoryServices.createCategory(categoryData);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: 'Category created successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
}));
const getAllCategories = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categories_services_1.CategoryServices.getAllCategories();
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'All categories data retrieved successfully!',
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        return next(error);
    }
}));
exports.CategoryControllers = {
    createCategory,
    getAllCategories,
};
