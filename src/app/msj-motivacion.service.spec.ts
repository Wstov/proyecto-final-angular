import { TestBed } from '@angular/core/testing';

import { MsjMotivacionService } from './msj-motivacion.service';

describe('MsjMotivacionService', () => {
  let service: MsjMotivacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsjMotivacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
