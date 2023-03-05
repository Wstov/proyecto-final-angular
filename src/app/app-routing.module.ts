import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './creditos/creditos.component';
import { FrasesMotivacionComponent } from './frases-motivacion/frases-motivacion.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: "frases", component: FrasesMotivacionComponent },
  { path: "creditos", component: CreditosComponent },
  { path: "", component: CarouselComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
