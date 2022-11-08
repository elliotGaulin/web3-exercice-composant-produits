import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  static readonly produitUrl = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
      return this.http.get<Produit[]>(ProduitService.produitUrl);
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(ProduitService.produitUrl, produit);
  }

  deleteProduit(produit: Produit): Observable<Produit> {
    return this.http.delete<Produit>(ProduitService.produitUrl + '/' + produit._id);
  }
}
