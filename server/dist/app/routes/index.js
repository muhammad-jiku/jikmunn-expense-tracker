"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("../modules/categories/categories.routes");
const transactions_routes_1 = require("../modules/transactions/transactions.routes");
const routes = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/categories',
        route: categories_routes_1.CategoryRoutes,
    },
    {
        path: '/transactions',
        route: transactions_routes_1.TransactionRoutes,
    },
];
moduleRoutes.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
