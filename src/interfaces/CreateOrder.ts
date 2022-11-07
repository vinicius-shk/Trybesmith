interface ICreateOrder {
  user?: { 
    id: number;
    username?: string;
    level?: number;
    classe?: string;
  };
  productsIds: number[];
}

export default ICreateOrder;