import connection from '../models/connection';
import ProductModel from '../models/productModel';
import IProduct from '../interfaces/Product';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    const created = await this.model.create(product);
    return created;
  }

  public async getAll(): Promise<IProduct[]> {
    const productsList = await this.model.getAll();
    return productsList;
  }
}

export default ProductService;