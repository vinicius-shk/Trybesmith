import express from 'express';

import ProductController from '../controllers/productController';

const productsRouter = express.Router();

const productController = new ProductController();

productsRouter.post('/', productController.create);

export default productsRouter;
