import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifyerCardComponent } from './beautifyer-card.component';

describe('BeautifyerCardComponent', () => {
  let component: BeautifyerCardComponent;
  let fixture: ComponentFixture<BeautifyerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifyerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifyerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
