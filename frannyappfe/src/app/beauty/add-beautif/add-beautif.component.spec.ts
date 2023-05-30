import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeautifComponent } from './add-beautif.component';

describe('AddBeautifComponent', () => {
  let component: AddBeautifComponent;
  let fixture: ComponentFixture<AddBeautifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeautifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBeautifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
