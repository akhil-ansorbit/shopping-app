import { Product } from './DataInterface';

export interface Cart extends Product {
  quantity: number;
}
