import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PizzaEditComponent } from 'src/app/pages/pizza-edit/pizza-edit.component';
import { PizzaComponent } from 'src/app/pages/pizza/pizza.component';
import { PizzasComponent } from 'src/app/pages/pizzas/pizzas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'pizzas/:id', component: PizzaComponent },
  { path: 'pizzas/:id/modifier', component: PizzaEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
