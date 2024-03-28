import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefairComponent } from './singlefair.component';

describe('SinglefairComponent', () => {
  let component: SinglefairComponent;
  let fixture: ComponentFixture<SinglefairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
