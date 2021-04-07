import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtEditDanhMucComponent } from './qt-edit-danh-muc.component';

describe('QtEditDanhMucComponent', () => {
  let component: QtEditDanhMucComponent;
  let fixture: ComponentFixture<QtEditDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtEditDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtEditDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
