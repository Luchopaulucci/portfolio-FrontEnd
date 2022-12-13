import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacercadeComponent } from './addacercade.component';

describe('AddacercadeComponent', () => {
  let component: AddacercadeComponent;
  let fixture: ComponentFixture<AddacercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddacercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddacercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
