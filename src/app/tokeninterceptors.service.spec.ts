import { TestBed } from '@angular/core/testing';

import { TokeninterceptorsService } from './tokeninterceptors.service';

describe('TokeninterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokeninterceptorsService = TestBed.get(TokeninterceptorsService);
    expect(service).toBeTruthy();
  });
});
