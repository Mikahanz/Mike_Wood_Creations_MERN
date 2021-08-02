import express, { Router } from 'express';
import { getProducts, getProductById } from '../controllers/product';

const router: Router = express.Router();

// Routes Starts Here ----------------

// @route GET /api/v1/schools/:id
router.route('/').get(getProducts);

// @route GET /api/v1/products/:id
router.route('/:id').get(getProductById);

// Routes Ends Here ------------------

export default router;
