import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {path: '', component: Page1Component},
  {path: 'gestion', component: GestionProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
