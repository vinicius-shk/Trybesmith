import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/Product';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const created = await this.model.create(product);
    return created;
  }

  public async getAll(): Promise<Product[]> {
    const productsList = await this.model.getAll();
    return productsList;
  }
}

export default ProductService;