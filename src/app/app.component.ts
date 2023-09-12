import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { User } from './models/user';
import { Ingredient } from './models/ingredient';
import { PizzaService } from './services/pizza.service';

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
  pizzas!: Pizza[];
  loading: boolean = false;
  user: User = new User('Mota', 'Fiorella', '2019-12-31', 'https://i.pravatar.cc/150?u=fiorella');
  ingredients: Array<Ingredient> = [
    { id: 1, name: 'Tomate', weight: 20, price: 0.50, image: 'tomate.png' },
    { id: 2, name: 'Avocat', weight: 60, price: 1.50, image: 'avocat.png' }
  ];

  constructor(private pizzaService: PizzaService) {}

  // On attend que le composant soit initialisé
  ngOnInit() {
    this.loading = true;

    this.pizzaService.getPizzas()
      .subscribe(pizzas => {
        this.pizzas = pizzas;
        this.loading = false;
      });
  }

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
    this.selectedPizza.ingredients = [event];
  }
}
