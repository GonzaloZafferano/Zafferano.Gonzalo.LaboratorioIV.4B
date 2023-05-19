import { TestBed } from '@angular/core/testing';

import { PizzasServiceService } from './pizzas-service.service';

describe('PizzasServiceService', () => {
  let service: PizzasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
