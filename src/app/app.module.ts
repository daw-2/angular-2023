import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    HomeComponent,
    PizzasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'pizzas', component: PizzasComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
