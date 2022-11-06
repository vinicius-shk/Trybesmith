import express from 'express';

import OrderController from '../controllers/orderController';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

export default orderRouter;