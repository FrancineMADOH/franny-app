import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignrdvComponent } from './assignrdv.component';

describe('AssignrdvComponent', () => {
  let component: AssignrdvComponent;
  let fixture: ComponentFixture<AssignrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignrdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
