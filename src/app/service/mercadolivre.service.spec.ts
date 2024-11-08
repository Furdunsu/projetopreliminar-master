import { TestBed } from '@angular/core/testing';

import { MercadoLivreService } from '../service/mercadolivre.service';

describe('MercadolivreService', () => {
  let service: MercadoLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
