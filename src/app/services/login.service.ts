// * Angular Imports
import { Injectable } from '@angular/core';

// * Contract Imports
import { LoginCredentials } from 'src/app/contracts';

// * Helpers Imports
import { Helpers } from '../helpers/functions';

const DEFAULT_LOGIN_CREDENTIALS: LoginCredentials = {
  email: 'mikro@mikro.com.tr',
  password: '123456',
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  async login(
    loginCredentials: LoginCredentials,
    successCallBack?: () => void,
    errorCallBack?: () => void
  ) {
    await this.#fakeWait();
    if (
      loginCredentials.email === DEFAULT_LOGIN_CREDENTIALS.email &&
      loginCredentials.password === DEFAULT_LOGIN_CREDENTIALS.password
    ) {
      Helpers.localStorage.writeAsJson('userInformation', loginCredentials);
      successCallBack && successCallBack();
      return true;
    }
    errorCallBack && errorCallBack()
    return false;
  }

  logout() {
    Helpers.localStorage.remove('userInformation');
    return true;
  }

  async #fakeWait() {
    const promise = new Promise((resolve) => setTimeout(resolve, 1500));
    await promise;
  }
}
