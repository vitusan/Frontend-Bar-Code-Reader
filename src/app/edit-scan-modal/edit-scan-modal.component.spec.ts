import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScanModalComponent } from './edit-scan-modal.component';

describe('EditScanModalComponent', () => {
  let component: EditScanModalComponent;
  let fixture: ComponentFixture<EditScanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScanModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
