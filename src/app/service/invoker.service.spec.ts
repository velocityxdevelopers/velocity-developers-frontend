import { TestBed } from '@angular/core/testing';

import { InvokerService } from './invoker.service';

describe('InvokerService', () => {
  let service: InvokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
