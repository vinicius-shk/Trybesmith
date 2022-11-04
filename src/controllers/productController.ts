import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const createdProduct = await this.productService.create(req.body);
    res.status(201).json(createdProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const productsList = await this.productService.getAll();
    res.status(200).json(productsList);
  };
}

export default ProductController;