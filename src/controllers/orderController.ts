import { Request, Response } from 'express';

import OrderService from '../services/orderService';
import createOrderSchema from '../validations/createOrderSchema';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const orderList = await this.orderService.getAll();
    res.status(200).json(orderList);
  };

  public create = async (req: Request, res: Response) => {
    const { error } = createOrderSchema.validate(req.body);
    
    if (error) {
      const httpError = error.message.includes('required') ? 400 : 422;
      return res.status(httpError).json({ message: error.message });
    }
    const response = await this.orderService.create(req.body);
    if (!response) return res.status(500).json({ message: 'Something went wrong' });
    res.status(201).json(response);
  };
}

export default OrderController;