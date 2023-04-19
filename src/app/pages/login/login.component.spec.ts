import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { LoginCredentials } from 'src/app/contracts';
import { LoginService } from 'src/app/services';
import { LoginComponent } from './login.component';
import { LogoComponent } from 'src/app/components/standalone/logo/logo.component';
import { TextboxComponent } from 'src/app/components/standalone/textbox/textbox.component';
import { SpinnerButtonComponent } from 'src/app/components/standalone/spinner-button/spinner-button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockToastr: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj(['login']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockToastr = jasmine.createSpyObj(['success', 'error']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        LogoComponent,
        TextboxComponent,
        SpinnerButtonComponent,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter },
        { provide: ToastrService, useValue: mockToastr },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginService.login with the correct credentials when login is called', async () => {
    const email = 'mikro@mikro.com.tr';
    const password = '123456';
    component.loginForm.setValue({ email, password });
    mockLoginService.login.and.returnValue(Promise.resolve(true));

    await component.login();

    const expectedCredentials: LoginCredentials = { email, password };
    expect(mockLoginService.login).toHaveBeenCalledWith(
      expectedCredentials,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });
});
