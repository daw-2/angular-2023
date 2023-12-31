import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {
    console.log(environment.name);
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(environment.apiUrl+'/pizzas')
      .pipe(
        // Transformer le tableau brut en tableau de Pizzas (Map de l'API avec le modèle)
        map((data: any[]) => data.map((item: any) => new Pizza(item.id, item.name, item.price, item.image))),
        delay(500)
      );
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(environment.apiUrl+'/pizzas/'+id)
      .pipe(
        map((data: any) => new Pizza(data.id, data.name, data.price, data.image)),
        delay(500)
      );
  }

  exists(name: string, exclude: number): Observable<boolean> {
    return this.http.get<any[]>(environment.apiUrl+'/pizzas?name='+name+'&id_ne='+exclude).pipe(
      map((data: any[]) => data.length > 0),
    );
  }

  getFakePizzas(): Observable<Pizza[]> {
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
