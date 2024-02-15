import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:'',component:Page1Component},
  {path:'produit',component:ProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
