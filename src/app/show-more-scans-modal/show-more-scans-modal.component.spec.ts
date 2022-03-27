import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreScansModalComponent } from './show-more-scans-modal.component';

describe('ShowMoreScansModalComponent', () => {
  let component: ShowMoreScansModalComponent;
  let fixture: ComponentFixture<ShowMoreScansModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoreScansModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoreScansModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
