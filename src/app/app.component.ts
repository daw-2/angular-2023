import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { User } from './models/user';

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
    { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
    { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
    { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
  ];
  user: User = new User('Mota', 'Fiorella', '2019-12-31', 'https://i.pravatar.cc/150');

  switchPizza(): void {
    let tmp = this.selectedPizza;
    this.selectedPizza = this.pizza2;
    this.pizza2 = tmp;
  }

  selectPizza(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
}
