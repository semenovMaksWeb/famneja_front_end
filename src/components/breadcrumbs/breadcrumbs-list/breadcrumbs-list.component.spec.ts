import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsListComponent } from './breadcrumbs-list.component';

describe('BreadcrumbsListComponent', () => {
  let component: BreadcrumbsListComponent;
  let fixture: ComponentFixture<BreadcrumbsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
