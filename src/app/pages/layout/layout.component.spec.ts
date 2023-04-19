import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services';
import { LayoutComponent } from './layout.component';
import { LogoComponent } from 'src/app/components/standalone/logo/logo.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj(LoginService, ['logout']);
    mockRouter = jasmine.createSpyObj(Router, ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports:[LogoComponent,RouterModule],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('logout', () => {
    it('should call loginService.logout and navigate to login page', () => {
      component.logout();
      expect(mockLoginService.logout).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
