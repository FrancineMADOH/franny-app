import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSoonComponent } from './market-soon.component';

describe('MarketSoonComponent', () => {
  let component: MarketSoonComponent;
  let fixture: ComponentFixture<MarketSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
