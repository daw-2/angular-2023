import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { User } from '../models/user';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorComponent]
    });
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    component.author = new User('Mota', 'Fiorella', '2019-12-31', 'avatar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const dom = fixture.nativeElement;
    const h2 = dom.querySelector('h2');
    expect(h2.textContent).toContain(component.author.firstname);
    expect(dom.querySelector('p').textContent).toBe('3 ans');
  });
});
