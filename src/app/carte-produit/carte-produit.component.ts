import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';
@Component({
  selector: 'app-carte-produit',
  templateUrl: './carte-produit.component.html',
  styleUrls: ['./carte-produit.component.css']
})
export class CarteProduitComponent implements OnInit {
  @Input() produit!: Produit;


  constructor() { }

  ngOnInit(): void {
  }

}
