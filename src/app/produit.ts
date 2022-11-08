export interface Produit {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    discount: number;
    vedette: boolean;
    category: Category;
}

export enum Category {
    Banane = 'Banane',
    Pomme = 'Pomme',
    Poire = 'Poire',
    Orange = 'Orange',
    Citron = 'Citron',
    Fraise = 'Fraise',
    Framboise = 'Framboise',
    Cerise = 'Cerise',
}
