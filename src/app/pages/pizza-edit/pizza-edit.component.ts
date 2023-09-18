import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  pizzaFormB!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.pizzaFormB = fb.group({
      name: fb.control('', [Validators.required, Validators.minLength(3)]),
      price: fb.control('', [Validators.required, Validators.min(1), Validators.max(100)]),
      image: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        // On transforme l'Observable params en Observable de Pizza
        switchMap((params) => this.pizzaService.getPizza(params['id']))
      )
      .subscribe({
        next: (pizza) => {
          this.pizza = pizza;
          // Mettre à jour le formulaire par le code
          this.pizzaFormB.setValue({
            name: pizza.name,
            price: pizza.price,
            image: pizza.image
          });
        },
        error: (error) => this.router.navigate(['/pizzas'])
      });
  }

  save(pizza: Pizza): void {
    console.log(pizza, this.pizza);
    // @todo Faire la mise à jour de la pizza sur l'API
  }

  saveB(): void {

  }
}
