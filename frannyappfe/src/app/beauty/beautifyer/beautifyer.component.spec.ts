import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifyerComponent } from './beautifyer.component';

describe('BeautifyerComponent', () => {
  let component: BeautifyerComponent;
  let fixture: ComponentFixture<BeautifyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
