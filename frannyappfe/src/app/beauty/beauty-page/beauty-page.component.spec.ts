import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyPageComponent } from './beauty-page.component';

describe('BeautyPageComponent', () => {
  let component: BeautyPageComponent;
  let fixture: ComponentFixture<BeautyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
