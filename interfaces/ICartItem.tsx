export interface ICartItem {
  id: number;
  name: string;
  nameLowerCase: string;
  price: number;
  imgSrc: string;
  imgAlt: string;
  description: string;
  ingredients: string[];
  quantity: number;
}
