import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { User } from './models/user';
import { Ingredient } from './models/ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Pizza Party';
  name: string = '4 fromages';
  selectedPizza!: Pizza;
  pizza2: Pizza = new Pizza(2, 'Reine', 5.99);
  pizzas: Pizza[] = [
    new Pizza(1, 'Reine', 12, 'reine.jpg'),
    new Pizza(2, '4 fromages', 13, '4-fromages.jpg'),
    new Pizza(3, 'Orientale', 11, 'orientale.jpg'),
    new Pizza(4, 'Cannibale', 9, 'cannibale.jpg'),
  ];
  user: User = new User('Mota', 'Fiorella', '2019-12-31', 'https://i.pravatar.cc/150?u=fiorella');
  ingredients: Array<Ingredient> = [
    { id: 1, name: 'Tomate', weight: 20, price: 0.50, image: 'tomate.png' },
    { id: 2, name: 'Avocat', weight: 60, price: 1.50, image: 'avocat.png' }
  ];

  switchPizza(): void {
    let tmp = this.selectedPizza;
    this.selectedPizza = this.pizza2;
    this.pizza2 = tmp;
  }

  selectPizza(pizza: Pizza): void {
    this.selectedPizza = pizza;
    this.selectedPizza.ingredients = [];
  }

  selectIngredient(event: Ingredient): void {
    this.selectedPizza.ingredients.push(event);
  }
}
