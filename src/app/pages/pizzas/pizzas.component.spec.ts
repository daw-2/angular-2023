import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { PizzasComponent } from './pizzas.component';

import { HttpClientModule } from '@angular/common/http';
import { IngredientListComponent } from 'src/app/ingredient-list/ingredient-list.component';
import { PizzaComponent } from 'src/app/pizza/pizza.component';
import { AppRoutingModule } from 'src/app/modules/app-routing/app-routing.module';

describe('PizzasComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [PizzasComponent, PizzaComponent, IngredientListComponent]
    });
    fixture = TestBed.createComponent(PizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const pizzas = fixture.nativeElement.querySelectorAll('ul.pizzas li');
      expect(pizzas.length).toBe(4);
      expect(pizzas[0].textContent.trim()).toContain('0: Reine');
    })
  }));
});
