import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author!: User;
}
