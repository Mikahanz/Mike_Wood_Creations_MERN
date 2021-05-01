"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = async (req, res, next) => {
    const products = await product_1.default.find({});
    if (products) {
        res.status(200).json({ count: products.length, data: products });
    }
};
exports.getProducts = getProducts;
const getProductById = async (req, res, next) => {
    try {
        const product = await product_1.default.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
};
exports.getProductById = getProductById;
