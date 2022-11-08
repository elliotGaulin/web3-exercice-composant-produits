import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {
  produits : Produit[] = [];
  displayedColumns: string[] = ['id', 'nom', 'price', 'discount', "description", "quantity", "category", "vedette", "actions"];
  
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(produits => this.produits = produits);
  }

  deleteProduit(produit: Produit): void {
    this.produits = this.produits.filter(p => p !== produit);
    this.produitService.deleteProduit(produit).subscribe();
  }
}
