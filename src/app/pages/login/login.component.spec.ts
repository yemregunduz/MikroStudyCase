import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from './login.component';
import { SpinnerButtonComponent } from 'src/app/components/standalone/spinner-button/spinner-button.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule,SpinnerButtonComponent ],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm with empty email and password', () => {
    expect(component.loginForm.value.email).toBe('');
    expect(component.loginForm.value.password).toBe('');
  });

  it('should call loginService login method with form values when login function is called', async () => {
    const expectedCredentials = { email: 'test@test.com', password: 'password' };
    component.loginForm.setValue(expectedCredentials);

    loginServiceSpy.login.and.returnValue(Promise.resolve(true));
    await component.login();

    expect(loginServiceSpy.login).toHaveBeenCalledWith(expectedCredentials);
  });

  it('should navigate to home page when login is successful', async () => {
    const expectedCredentials = { email: 'test@test.com', password: 'password' };
    component.loginForm.setValue(expectedCredentials);

    loginServiceSpy.login.and.returnValue(Promise.resolve(true));
    await component.login();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should not navigate to home page when login is unsuccessful', async () => {
    const expectedCredentials = { email: 'test@test.com', password: 'password' };
    component.loginForm.setValue(expectedCredentials);

    loginServiceSpy.login.and.returnValue(Promise.resolve(false));
    await component.login();

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should set loading to false after login completes', async () => {
    const expectedCredentials = { email: 'test@test.com', password: 'password' };
    component.loginForm.setValue(expectedCredentials);

    loginServiceSpy.login.and.returnValue(Promise.resolve(true));
    await component.login();

    expect(component.loading).toBe(false);
  });

});
