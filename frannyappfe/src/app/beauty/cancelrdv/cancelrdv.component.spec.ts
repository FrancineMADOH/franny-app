import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelrdvComponent } from './cancelrdv.component';

describe('CancelrdvComponent', () => {
  let component: CancelrdvComponent;
  let fixture: ComponentFixture<CancelrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelrdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
