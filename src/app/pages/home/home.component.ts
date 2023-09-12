import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User = new User('Mota', 'Fiorella', '2019-12-31', 'https://i.pravatar.cc/150?u=fiorella');
}
