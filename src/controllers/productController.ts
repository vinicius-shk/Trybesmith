import { Request, Response } from 'express';

import ProductService from '../services/productService';
import createProdSchema from '../validations/createProdSchema';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const { error } = createProdSchema.validate(req.body);
    if (error) {
      const httpError = error.message.includes('required') ? 400 : 422;
      return res.status(httpError).json({ message: error.message });
    }
    const createdProduct = await this.productService.create(req.body);
    res.status(201).json(createdProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const productsList = await this.productService.getAll();
    res.status(200).json(productsList);
  };
}

export default ProductController;