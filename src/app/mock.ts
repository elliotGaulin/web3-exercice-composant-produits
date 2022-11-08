import { Category, Produit } from "./produit";

export const PRODUITS: Produit[] = [
    {id: 1, name: 'Produit 1', price: 100, description: 'Description du produit 1', quantity: 1, discount: 0, vedette: true, category: Category.Banane},
    {id: 2, name: 'Produit 2', price: 200, description: 'Description du produit 2', quantity: 0, discount: 0, vedette: false, category: Category.Banane},
    {id: 3, name: 'Produit 3', price: 300, description: 'Description du produit 3', quantity: 10, discount: 200, vedette: false, category: Category.Banane},
    {id: 4, name: 'Produit 4', price: 400, description: 'Description du produit 4', quantity: 15, discount: 400, vedette: false, category: Category.Banane},
];