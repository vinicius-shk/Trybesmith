// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const createdProduct = await this.productService.create(req.body);
    res.status(201).json(createdProduct);
  };
}

export default ProductController;