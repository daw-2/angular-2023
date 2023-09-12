import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  @Input('pizza') selectedPizza!: Pizza;

  // constructor() { // Pas accès aux INPUT
  ngOnInit() {
    let selectedPizza = this.selectedPizza;
    console.log('INIT', selectedPizza);

    setInterval(() => {
      // console.log(selectedPizza);
    }, 1000);
  }

  ngOnChanges() {
    console.log('CHANGES', this.selectedPizza);
  }
}
