import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MikroHttpClientService, RequestParameter } from './mikro-http-client.service';
import { ConfigService } from './config/config.service';

describe('MikroHttpClientService', () => {
  let service: MikroHttpClientService;
  let httpTestingController: HttpTestingController;
  let configService: ConfigService;
  const url = "https://dummyapi.io/data/v1/"
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MikroHttpClientService]
    });
    service = TestBed.inject(MikroHttpClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
    configService = TestBed.inject(ConfigService);
    ConfigService.AppSettings = { api: { url: 'https://dummyapi.io/data/v1' }, appId: 'test-app-id' };
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create the correct URL', () => {
    const partialRequestParameter: Partial<RequestParameter> = {
      baseUrl: 'http://test.api',
      controllerName: 'users',
      action: 'get',
    };
    const expectedUrl = 'http://test.api/users/get';

    const actualUrl = service.createUrl(partialRequestParameter);

    expect(actualUrl).toEqual(expectedUrl);
  });

  it('should create the correct URL without action', () => {
    const partialRequestParameter: Partial<RequestParameter> = {
      baseUrl: 'http://test.api',
      controllerName: 'users',
    };
    const expectedUrl = 'http://test.api/users';

    const actualUrl = service.createUrl(partialRequestParameter);

    expect(actualUrl).toEqual(expectedUrl);
  });

  it('should create the correct URL with default base URL', () => {
    const partialRequestParameter: Partial<RequestParameter> = {
      controllerName: 'users',
      action: 'get',
    };
    const expectedUrl = `${ConfigService.AppSettings.api.url}/users/get`;

    const actualUrl = service.createUrl(partialRequestParameter);

    expect(actualUrl).toEqual(expectedUrl);
  });
  it('should send a GET request and return the response', () => {
    const requestParameter: RequestParameter = {
      controllerName: 'users',
      action:'get'
    };
    const mockResponse = { data: 'mock data' };
    const id = '123';

    service.get<any>(requestParameter, id).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const mockUrl = `https://dummyapi.io/data/v1/${requestParameter.controllerName}/${requestParameter.action}/${id}`;
    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.get('app-id')).toEqual('test-app-id');
    req.flush(mockResponse);
  });

  it('should send a POST request and return the response', () => {
    const requestParameter: RequestParameter = {
      controllerName: 'users',
    };
    const mockRequest = { name: 'John Doe' };
    const mockResponse = { id: '123', name: 'John Doe' };

    service.post<any>(requestParameter, mockRequest).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const mockUrl = `${url}users`;
    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });
});
