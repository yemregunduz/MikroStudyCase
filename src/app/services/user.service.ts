// * Angular Imports
import { Injectable } from '@angular/core';

// * Http Client Imports
import { MikroHttpClientService } from './mikro-http-client.service';
import { HttpErrorResponse } from '@angular/common/http';

// * Contract Imports
import { PageRequest, PagedResponse, User } from 'src/app/contracts';

// * Helper Imports
import { Helpers } from 'src/app/helpers/functions';

// * Thirds Party Imports
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private mikroHttpClient: MikroHttpClientService) {}

  /**
    @param pageRequest An optional parameter that specifies the pagination settings for the getUsers request.
    @param successCallBack (optional) A callback function that will be called if the getUsers request is successful.
    @param errorCallBack (optional) A callback function that will be called if the getUsers request fails.
    @returns A Promise that resolves to an array of User objects.
  */
  async getUsers(
    pageRequest: PageRequest = { limit: 25 },
    successCallBack?: () => void,
    errorCallBack?: (httpErrorResponse: HttpErrorResponse) => void
  ) {
    const promise = firstValueFrom(
      this.mikroHttpClient.get<PagedResponse<User>>({
        controllerName:'user',
        queryString: Helpers.generateQueryStringFromObject(pageRequest),
      })
    );

    promise
    .then(()=>successCallBack &&successCallBack())
    .catch((err:HttpErrorResponse)=>errorCallBack && errorCallBack(err))

    return promise;
  }
}
