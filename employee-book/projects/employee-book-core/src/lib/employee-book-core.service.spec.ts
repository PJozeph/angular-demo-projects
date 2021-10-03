import { TestBed } from '@angular/core/testing';

import { EmployeeBookCoreService } from './employee-book-core.service';

describe('EmployeeBookCoreService', () => {
  let service: EmployeeBookCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBookCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
