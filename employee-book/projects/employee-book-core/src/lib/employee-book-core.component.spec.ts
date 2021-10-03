import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBookCoreComponent } from './employee-book-core.component';

describe('EmployeeBookCoreComponent', () => {
  let component: EmployeeBookCoreComponent;
  let fixture: ComponentFixture<EmployeeBookCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBookCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBookCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
