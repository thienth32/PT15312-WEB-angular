import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtNewDanhMucComponent } from './qt-new-danh-muc.component';

describe('QtNewDanhMucComponent', () => {
  let component: QtNewDanhMucComponent;
  let fixture: ComponentFixture<QtNewDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtNewDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtNewDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
