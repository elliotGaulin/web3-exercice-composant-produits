import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-root',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  title = 'exercice-composants-produits';
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {
    produitService.getProduits().subscribe(produits => this.produits = produits);
  }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(produits => this.produits = produits);
  }

  addProduit = (produit: Produit): void => {
    this.produits.push(produit);
    this.produitService.addProduit(produit).subscribe();
  }
}
