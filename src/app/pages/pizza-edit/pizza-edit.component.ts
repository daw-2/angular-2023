import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent {
  pizza!: Pizza;
  images: string[] = [
    '4-fromages.jpg',
    'cannibale.jpg',
    'orientale.jpg',
    'reine.jpg',
  ];

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        // On transforme l'Observable params en Observable de Pizza
        switchMap((params) => this.pizzaService.getPizza(params['id']))
      )
      .subscribe({
        next: (pizza) => this.pizza = pizza,
        error: (error) => this.router.navigate(['/pizzas'])
      });
  }

  save(pizza: Pizza): void {
    console.log(pizza, this.pizza);
  }
}
