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
  private lastResult: any = {
    value: null,
    error: null,
  };

  constructor(private pizzaService: PizzaService) {}

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    if (control.pristine) {
      return of(null);
    }

    // Evite de faire une requête sur une valeur si elle a été faite précédemment
    if (this.lastResult.value === control.value) {
      return of(this.lastResult.error);
    }    

    // Optimisation sur l'API
    return control.valueChanges.pipe(
      debounceTime(500),
      switchMap(v => {
        this.lastResult.value = control.value;
        return this.pizzaService.exists(v, 2) // @todo Faire en sorte que le 2 soit dynamique
      }),
      map((exists: boolean) => {
        this.lastResult.result = exists ? { appUniquePizza: true } : null

        return this.lastResult.result;
      }),
      first(),
    );
  }
}
