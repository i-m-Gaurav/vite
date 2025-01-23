import express from 'express'

import { createProduct, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/',getProducts);
router.post('/',createProduct);
// router.put('/products/:id',updateProducts);
// router.delete('/products/:id',deleteProduct);

export default router;

