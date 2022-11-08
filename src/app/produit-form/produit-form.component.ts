import { Component, OnInit, Input } from '@angular/core';
import { Category, Produit } from '../produit';
@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {
  produit: Produit;
  categories = Object.values(Category);

  @Input() addProduit!: (produit: Produit) => void;

  constructor() { 
    this.produit = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      quantity: 0,
      discount: 0,
      vedette: false,
      category: Category.Banane
    };
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.addProduit(this.produit);
    this.produit = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      quantity: 0,
      discount: 0,
      vedette: false,
      category: Category.Banane
    };
  }
}
