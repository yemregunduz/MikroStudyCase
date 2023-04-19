import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { UserListItemComponent } from './user-list-item.component';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ],
      imports: [ CommonModule,AvatarComponent,UserListItemComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListItemComponent);
    component = fixture.componentInstance;
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.title = 'Engineer';
    component.email = 'johndoe@example.com';
    component.phone = '1234567890';
    fixture.detectChanges();
  });

  it('should create the user list item component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user information', () => {

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text-primary').textContent).toContain('John Doe');
    expect(compiled.querySelector('span:nth-of-type(2)').textContent).toContain('Email : johndoe@example.com');
    expect(compiled.querySelector('span:nth-of-type(3)').textContent).toContain('Phone: 1234567890');
  });
});
