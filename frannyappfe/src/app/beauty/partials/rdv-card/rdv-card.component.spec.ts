import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvCardComponent } from './rdv-card.component';

describe('RdvCardComponent', () => {
  let component: RdvCardComponent;
  let fixture: ComponentFixture<RdvCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
