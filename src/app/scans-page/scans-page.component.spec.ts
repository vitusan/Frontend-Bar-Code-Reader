import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScansPageComponent } from './scans-page.component';

describe('ScansPageComponent', () => {
  let component: ScansPageComponent;
  let fixture: ComponentFixture<ScansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScansPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
