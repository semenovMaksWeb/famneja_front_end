import { TestBed } from '@angular/core/testing';

import { GeneratorClassService } from './generator-class.service';

describe('GeneratorClassService', () => {
  let service: GeneratorClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
