import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFairsComponent } from './dashboard-fairs.component';

describe('DashboardFairsComponent', () => {
  let component: DashboardFairsComponent;
  let fixture: ComponentFixture<DashboardFairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
