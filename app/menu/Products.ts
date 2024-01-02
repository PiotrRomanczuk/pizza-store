export interface IProduct {
  id: number;
  name: string;
  nameLowerCase: string;
  price: number;
    imgSrc: string;
    imgAlt: string;
  description: string;
  ingredients?: string[];
}

export const DummyProducts: IProduct[] = [
    {
        id: 1,
        name: "Margherita",
        nameLowerCase: "margherita",
        price: 11.99,
        imgSrc: "/dominos/margherita.png",
        imgAlt: 'margherita',
        description: "plain pizza",
        ingredients: ["tomato", "mozzarella", "basil"]
    },
    {
        id: 2, 
        name: "Prosciutto",
        nameLowerCase: "prosciutto",
        price: 12.99,
        imgSrc: "/dominos/capriciosa.png",
        imgAlt: 'capriciosa',
        description: "Ham and cheese",
        ingredients: ["tomato", "mozzarella", "basil", "prosciutto"]
    },
    {
        id: 3,
        name: "Salami",
        nameLowerCase: "salami",
        price: 13.99, 
        imgSrc: "/dominos/pepperoni.png",
        imgAlt: 'pepperoni',
        description: "Salami and cheese",
        ingredients: ["tomato", "mozzarella", "basil", "salami"]
    }
]
