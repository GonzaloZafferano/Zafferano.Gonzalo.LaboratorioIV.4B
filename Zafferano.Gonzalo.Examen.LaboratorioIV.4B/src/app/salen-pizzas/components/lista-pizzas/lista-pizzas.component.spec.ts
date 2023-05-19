import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPizzasComponent } from './lista-pizzas.component';

describe('ListaPizzasComponent', () => {
  let component: ListaPizzasComponent;
  let fixture: ComponentFixture<ListaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
