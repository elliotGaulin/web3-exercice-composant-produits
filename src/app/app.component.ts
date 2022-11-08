import { Component } from '@angular/core';
import { Produit } from './produit';
import { PRODUITS } from './mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-composants-produits';
  produits : Produit[] = PRODUITS;

  addProduit = (produit: Produit) : void => {
    this.produits.push(produit);
  }
}
