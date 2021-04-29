"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allErrorsHandler = exports.notFoundError = void 0;
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const chalk_1 = __importDefault(require("chalk"));
const notFoundError = (req, res, next) => {
    console.log(chalk_1.default.red.underline('Not Found - 404 Error!!!'));
    const error = new Error(`${req.originalUrl} Not Found`);
    res.status(404).json({ message: `Not Found - 404` });
    next(error);
};
exports.notFoundError = notFoundError;
const allErrorsHandler = (err, req, res, next) => {
    var _a;
    console.log(chalk_1.default.hex('#FFA500').underline(`${err.name}!`));
    let error = { ...err };
    error.message = err.message;
    if (err.name === 'CastError') {
        error = new errorResponse_1.default(`Resource Not Found!`, 404);
    }
    // Response to client
    res.status((_a = error.statusCode) !== null && _a !== void 0 ? _a : 500).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
    next();
};
exports.allErrorsHandler = allErrorsHandler;
