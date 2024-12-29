"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const categories_controllers_1 = require("./categories.controllers");
const router = express_1.default.Router();
router
    .route('/')
    .post(categories_controllers_1.CategoryControllers.createCategory)
    .get(categories_controllers_1.CategoryControllers.getAllCategories);
exports.CategoryRoutes = router;
