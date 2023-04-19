import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConfigService } from './config.service';
import { environment } from 'src/app/environment/environment';
import { MikroStudyCaseConfig } from './MikroStudyCaseConfig';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });

    service = TestBed.inject(ConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load configuration', () => {
    const expectedConfig: MikroStudyCaseConfig = {
      api: {
        url: "https://dummyapi.io/data/v1"
      },
      appId : "611f33c594916dee4af13a68"
    }
    ;

    service.load().subscribe((config: MikroStudyCaseConfig) => {
      expect(config).toEqual(expectedConfig);
      expect(ConfigService.AppSettings).toEqual(expectedConfig);
    });
    const version = "1.0"
    const req = httpMock.expectOne(`./assets/config/appsettings.${environment.name}.json?v=${version}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedConfig);
  });
});
