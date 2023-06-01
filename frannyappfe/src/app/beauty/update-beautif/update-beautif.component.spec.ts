import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBeautifComponent } from './update-beautif.component';

describe('UpdateBeautifComponent', () => {
  let component: UpdateBeautifComponent;
  let fixture: ComponentFixture<UpdateBeautifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBeautifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBeautifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
