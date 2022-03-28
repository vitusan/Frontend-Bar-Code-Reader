import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorPageComponent } from './leitor-page.component';

describe('LeitorPageComponent', () => {
  let component: LeitorPageComponent;
  let fixture: ComponentFixture<LeitorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
