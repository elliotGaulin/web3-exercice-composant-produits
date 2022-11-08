import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits-cartes',
  templateUrl: './liste-produits-cartes.component.html',
  styleUrls: ['./liste-produits-cartes.component.css']
})
export class ListeProduitsCartesComponent implements OnInit {
  @Input() produits : Produit[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
