import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  selectedPizza!: Pizza;
  pizza2: Pizza = new Pizza(2, 'Reine', 5.99);
  pizzas!: Pizza[];
  loading: boolean = false;
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
