import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, debounceTime, delay, first, map, of, switchMap } from 'rxjs';
import { PizzaService } from '../services/pizza.service';

@Directive({
  selector: 'input[appUniquePizza]',
  // Ici, on fournit notre directive à la liste des validators asynchrones d'Angular
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniquePizzaValidatorDirective,
    multi: true
  }]
})
export class UniquePizzaValidatorDirective implements AsyncValidator {
  private lastError: any = {
    value: null,
    result: null,
  };

  constructor(private pizzaService: PizzaService) {}

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    if (control.pristine) {
      return of(null);
    }

    if (this.lastError.value === control.value) {
      return of(this.lastError.result);
    }    

    // Optimisation sur l'API
    return control.valueChanges.pipe(
      debounceTime(500),
      switchMap(v => {
        this.lastError.value = control.value;
        return this.pizzaService.exists(v, 2)
      }),
      map((exists: boolean) => {
        this.lastError.result = exists ? { appUniquePizza: true } : null

        return this.lastError.result;
      }),
      first(),
    );

    return this.pizzaService.exists(control.value, 2).pipe(
      map((exists: boolean) => exists ? { appUniquePizza: true } : null),
      delay(500),
    );
  }
}
