// * Angular Imports
import { TestBed } from '@angular/core/testing';

// * Contract Imports
import { LoginCredentials } from 'src/app/contracts';

// * Service Imports
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to log in with correct credentials', async () => {
    const loginCredentials: LoginCredentials = { email: 'mikro@mikro.com.tr', password: '123456' };
    const loginResult = await service.login(loginCredentials);
    expect(loginResult).toBeTrue();
  });

  it('should not be able to log in with incorrect credentials', async () => {
    const loginCredentials: LoginCredentials = { email: 'mikro@mikro.com.tr', password: 'wrongpassword' };
    const loginResult = await service.login(loginCredentials);
    expect(loginResult).toBeFalse();
  });

  it('should be able to log out', () => {
    const logoutResult = service.logout();
    expect(logoutResult).toBeTrue();
  });
});
