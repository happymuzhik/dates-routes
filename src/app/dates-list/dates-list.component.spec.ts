import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesListComponent } from './dates-list.component';

describe('DatesListComponent', () => {
  let component: DatesListComponent;
  let fixture: ComponentFixture<DatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
