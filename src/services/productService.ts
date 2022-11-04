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
}

export default ProductService;