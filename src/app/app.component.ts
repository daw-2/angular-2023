import { Component } from '@angular/core';
import { Pizza } from './models/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Pizza Party';
  name: string = '4 fromages';
  pizza: Pizza = {
    id: 1,
    name: '4 fromages',
    price: 4.99,
    image: '4-fromages.jpg',
  };
  pizza2: Pizza = new Pizza(2, 'Reine', 5.99);

  switchPizza(): void {
    let tmp = this.pizza;
    this.pizza = this.pizza2;
    this.pizza2 = tmp;
  }
}
