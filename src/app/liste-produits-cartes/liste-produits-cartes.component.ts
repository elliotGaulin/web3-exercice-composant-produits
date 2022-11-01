import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { PRODUITS } from '../mock';

@Component({
  selector: 'app-liste-produits-cartes',
  templateUrl: './liste-produits-cartes.component.html',
  styleUrls: ['./liste-produits-cartes.component.css']
})
export class ListeProduitsCartesComponent implements OnInit {
  produits : Produit[] = PRODUITS;

  constructor() { }

  ngOnInit(): void {
  }

}
