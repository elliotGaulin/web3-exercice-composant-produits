import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
