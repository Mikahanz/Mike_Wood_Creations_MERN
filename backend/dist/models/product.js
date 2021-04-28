"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: 'UserId is required!',
        ref: 'User'
    },
    sku: {
        type: String,
        required: 'SKU is required',
        trim: true
    },
    barcode: {
        type: String,
        trim: true
    },
    prodName: {
        type: String,
        required: 'Product name is required!',
        unique: true,
        trim: true
    },
    prodDescription: {
        type: String,
        required: 'Product description is required!'
    },
    brand: {
        type: String,
        required: 'Brand is required!',
        trim: true
    },
    category: {
        type: String,
        enum: ['men', 'women', 'kid', 'any'],
        required: 'Category is required!'
    },
    prodType: {
        type: String,
        enum: ['watch', 'bowtie', 'sunglasses', 'bag', 'wallet', 'ringbox', 'bracelet', 'cufflinks', 'coaster', 'band', 'case', 'other'],
        required: 'Product Type is required! Please provide one of the following: watch, bowtie, sunglasses, bag, wallet, ringbox, bracelet, cufflinks, band, or other'
    },
    prodImage: {
        type: [{ imgId: String, image: String }],
        required: 'Image is required!'
    },
    stockQty: {
        type: Number,
        required: 'Quantity in stock is required!'
    },
    rating: {
        type: Number
    },
    reviews: {
        type: [mongoose_1.default.Schema.Types.ObjectId]
    },
    reviewsQty: {
        type: Number
    },
    variants: {
        type: []
    },
    originalPrice: {
        type: Number,
    },
    price: {
        type: Number,
        required: 'Price is required!'
    },
    specialPrice: {
        type: Number,
    }
}, {
    timestamps: true
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
