import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalenPizzasComponent } from './salen-pizzas.component';

describe('SalenPizzasComponent', () => {
  let component: SalenPizzasComponent;
  let fixture: ComponentFixture<SalenPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalenPizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalenPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
