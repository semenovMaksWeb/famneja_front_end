import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableThResizeComponent } from './table-th-resize.component';

describe('TableThResizeComponent', () => {
  let component: TableThResizeComponent;
  let fixture: ComponentFixture<TableThResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableThResizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableThResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
