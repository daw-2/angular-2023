import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PizzasComponent } from 'src/app/pages/pizzas/pizzas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
