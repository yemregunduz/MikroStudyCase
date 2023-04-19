import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should return false and redirect to login page if user is not authenticated', () => {
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;
    spyOn(guard['router'], 'navigate');
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

    expect(result).toEqual(false);
    expect(guard['router'].navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should return true if user is authenticated', () => {
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;
    spyOn(localStorage, 'getItem').and.returnValue('{"email":"mikro@mikro.com.ctr","password":"123456"}');

    const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

    expect(result).toEqual(true);
  });
});

