import { TestBed } from '@angular/core/testing';

import { SalenPizzasGuard } from './salen-pizzas.guard';

describe('SalenPizzasGuard', () => {
  let guard: SalenPizzasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalenPizzasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
