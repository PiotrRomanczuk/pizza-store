import { IProduct } from "./IProduct";
import { ICartActions } from "./ICartActions";

export interface IProductDisplay {
  product: IProduct;
}

export interface IProductCard extends ICartActions {}