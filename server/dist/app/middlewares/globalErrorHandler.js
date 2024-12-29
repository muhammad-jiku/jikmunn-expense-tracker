"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const handleCastError_1 = require("../../errors/handleCastError");
const handleValidationError_1 = require("../../errors/handleValidationError");
const logger_1 = require("../../shared/logger");
const globalErrorHandler = (err, req, res, next) => {
    (config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.env) === 'development'
        ? console.log('Global development error handler:', { err })
        : logger_1.errorlogger.error('Global production error handler:', err);
    let statusCode = 500;
    let message = 'Something went wrong!';
    let errorMessages = [];
    if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.handleValidationError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, handleCastError_1.handleCastError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err instanceof ApiError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorMessages = (err === null || err === void 0 ? void 0 : err.message) ? [{ path: '', message: err === null || err === void 0 ? void 0 : err.message }] : [];
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorMessages = (err === null || err === void 0 ? void 0 : err.message) ? [{ path: '', message: err === null || err === void 0 ? void 0 : err.message }] : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config_1.default.env !== 'production' ? err === null || err === void 0 ? void 0 : err.stack : undefined,
    });
};
exports.globalErrorHandler = globalErrorHandler;
