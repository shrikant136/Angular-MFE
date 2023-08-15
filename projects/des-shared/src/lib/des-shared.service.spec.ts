import { TestBed } from '@angular/core/testing';

import { DesSharedService } from './services/des-shared.service';

describe('DesSharedService', () => {
  let service: DesSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
