import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorDesktopComponent } from './leitor-desktop.component';

describe('LeitorDesktopComponent', () => {
  let component: LeitorDesktopComponent;
  let fixture: ComponentFixture<LeitorDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
