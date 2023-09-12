import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  @Input() ingredients!: Ingredient[];
  @Output() selected: EventEmitter<Ingredient> = new EventEmitter();
}
