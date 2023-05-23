import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifyerFormComponent } from './beautifyer-form.component';

describe('BeautifyerFormComponent', () => {
  let component: BeautifyerFormComponent;
  let fixture: ComponentFixture<BeautifyerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifyerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifyerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
