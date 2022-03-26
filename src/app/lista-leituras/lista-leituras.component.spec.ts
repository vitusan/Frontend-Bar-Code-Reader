import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLeiturasComponent } from './lista-leituras.component';

describe('ListaLeiturasComponent', () => {
  let component: ListaLeiturasComponent;
  let fixture: ComponentFixture<ListaLeiturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLeiturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLeiturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
