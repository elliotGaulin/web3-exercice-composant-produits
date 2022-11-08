import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { InfoProduitComponent } from './info-produit/info-produit.component';
import { PiedProduitComponent } from './pied-produit/pied-produit.component';
import { PrixProduitComponent } from './prix-produit/prix-produit.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { ListeProduitsCartesComponent } from './liste-produits-cartes/liste-produits-cartes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarteProduitComponent } from './carte-produit/carte-produit.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ListeProduitComponent,
    FicheProduitComponent,
    InfoProduitComponent,
    PiedProduitComponent,
    PrixProduitComponent,
    LienDetailsComponent,
    ListeProduitsCartesComponent,
    CarteProduitComponent,
    ProduitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
