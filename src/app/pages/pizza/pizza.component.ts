import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  // selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizza!: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
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
}
