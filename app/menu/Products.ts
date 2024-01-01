export interface IProduct {
    id: number;
    name: string;
    nameLowerCase: string;
    price: number;
    description: string;
    ingredients?:string[] 
}

export const Products: IProduct[] = [
    {
        id: 1,
        name: "Margherita",
        nameLowerCase: "margherita",
        price: 11.99,
        description: "plain pizza",
        ingredients: ["tomato", "mozzarella", "basil"]
    },
    {
        id: 2, 
        name: "Prosciutto",
        nameLowerCase: "prosciutto",
        price: 12.99,
        description: "Ham and cheese",
        ingredients: ["tomato", "mozzarella", "basil", "prosciutto"]
    },
    {
        id: 3,
        name: "Salami",
        nameLowerCase: "salami",
        price: 13.99,
        description: "Salami and cheese",
        ingredients: ["tomato", "mozzarella", "basil", "salami"]
    }
]
