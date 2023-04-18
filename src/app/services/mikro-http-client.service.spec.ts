import { TestBed } from '@angular/core/testing';

import { MikroHttpClientService } from './mikro-http-client.service';

describe('MikroHttpClientService', () => {
  let service: MikroHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MikroHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
