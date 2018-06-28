import { TestBed, inject } from '@angular/core/testing';

import { GothttpService } from './gothttp.service';

describe('GothttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GothttpService]
    });
  });

  it('should be created', inject([GothttpService], (service: GothttpService) => {
    expect(service).toBeTruthy();
  }));
});
