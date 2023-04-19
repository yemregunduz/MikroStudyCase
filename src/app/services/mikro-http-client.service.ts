// * Angular Imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// * Service Imports
import { ConfigService } from './config/config.service';

//* Third Party Imports
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MikroHttpClientService {
  constructor(private httpClient: HttpClient) {}

  /**
   *Constructs the URL for the HTTP request based on the RequestParameter object passed as a parameter.
   *@param requestParameter - The request parameter object containing the necessary information to construct the URL.
   *@returns The URL constructed based on the request parameter object.
   */
  public createUrl(requestParameter: Partial<RequestParameter>) {
    return `${
      requestParameter.baseUrl
        ? requestParameter.baseUrl
        : ConfigService.AppSettings.api.url
    }/${requestParameter.controllerName}${
      requestParameter.action ? `/${requestParameter.action}` : ''
    }`;
  }
  /**
   * Sends an HTTP GET request to the specified endpoint and returns the response as an observable of type T.
   * @param requestParameter requestParameter An object containing the endpoint details such as controller
   * name, action name, query parameters, fullEndPoint, baseUrl, headers etc.
   * @param id (optional) The ID of the resource to fetch.
   * @returns
   */
  get<T>(
    requestParameter: Partial<RequestParameter>,
    id?: string
  ): Observable<T> {
    let url = '';
    if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
    else
      url = `${this.createUrl(requestParameter)}${id ? `/${id}` : ''}${
        requestParameter.pathVariable ? `/${requestParameter.pathVariable}` : ''
      }${
        requestParameter.queryString ? `?${requestParameter.queryString}` : ''
      }`;
    return this.httpClient.get<T>(url, {
      headers: {
        ...requestParameter.headers,
        ...{ 'app-id': ConfigService.AppSettings.appId },
      },
    });
  }
  /**
   * Sends an HTTP GET request to the specified endpoint and returns the response as an observable of type T.
   * @param requestParameter requestParameter An object containing the endpoint details such as controller
   * name, action name, query parameters, fullEndPoint, baseUrl, headers etc.
   * @param id (optional) The ID of the resource to fetch.
   * @returns
   */
  post<T>(
    requestParameter: Partial<RequestParameter>,
    body: any
  ): Observable<T> {
    let url = '';
    if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
    else
      url = `${this.createUrl(requestParameter)}${
        requestParameter.pathVariable ? `/${requestParameter.pathVariable}` : ''
      }${
        requestParameter.queryString ? `?${requestParameter.queryString}` : ''
      }`;
    return this.httpClient.post<T>(url, body, {
      headers: requestParameter.headers,
    });
  }
}
export class RequestParameter {
  controllerName?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  queryString?: string;
  pathVariable?: string;
}
