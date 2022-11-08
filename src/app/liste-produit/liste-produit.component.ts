import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';
@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  @Input() produits : Produit[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
