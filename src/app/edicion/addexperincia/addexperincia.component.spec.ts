import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexperinciaComponent } from './addexperincia.component';

describe('AddexperinciaComponent', () => {
  let component: AddexperinciaComponent;
  let fixture: ComponentFixture<AddexperinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexperinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexperinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
