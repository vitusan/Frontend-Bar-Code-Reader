import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorMobileComponent } from './leitor-mobile.component';

describe('LeitorMobileComponent', () => {
  let component: LeitorMobileComponent;
  let fixture: ComponentFixture<LeitorMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
