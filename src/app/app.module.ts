import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { PizzaComponent as PizzaPage } from './pages/pizza/pizza.component';
import { PizzaEditComponent } from './pages/pizza-edit/pizza-edit.component';
import { UniquePizzaValidatorDirective } from './directives/unique-pizza-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    HomeComponent,
    PizzasComponent,
    PizzaPage,
    PizzaEditComponent,
    UniquePizzaValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
