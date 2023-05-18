import { TestBed } from '@angular/core/testing';

import { AltasGuard } from './altas.guard';

describe('AltasGuard', () => {
  let guard: AltasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AltasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
