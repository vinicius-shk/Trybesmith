import express from 'express';

import OrderController from '../controllers/orderController';
import jtwValidation from '../middlewares/auth/jtwValidation';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

orderRouter.post('/', jtwValidation, orderController.create);

export default orderRouter;