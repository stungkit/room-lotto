import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedChartComponent } from './bed-chart.component';

describe('BedChartComponent', () => {
  let component: BedChartComponent;
  let fixture: ComponentFixture<BedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
