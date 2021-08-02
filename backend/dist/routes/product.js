"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
const router = express_1.default.Router();
// Routes Starts Here ----------------
// @route GET /api/v1/schools/:id
router.route('/').get(product_1.getProducts);
// @route GET /api/v1/products/:id
router.route('/:id').get(product_1.getProductById);
// Routes Ends Here ------------------
exports.default = router;
//# sourceMappingURL=product.js.map