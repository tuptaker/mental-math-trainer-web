import { TestBed, inject } from '@angular/core/testing';

import { MmtService } from './mmt.service';

describe('MmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MmtService]
    });
  });

  it('should be created', inject([MmtService], (service: MmtService) => {
    expect(service).toBeTruthy();
  }));
});
