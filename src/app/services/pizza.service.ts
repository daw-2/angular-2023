import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Observable, delay, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  getPizzas(): Observable<Pizza[]> {
    return of([
      new Pizza(1, 'Reine', 12, 'reine.jpg'),
      new Pizza(2, '4 fromages', 13, '4-fromages.jpg'),
      new Pizza(3, 'Orientale', 11, 'orientale.jpg'),
      new Pizza(4, 'Cannibale', 9, 'cannibale.jpg'),
    ]).pipe(
      delay(500), // Pour simuler un vrai appel API
    );
  }
}
