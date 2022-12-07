import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRepComponent } from './random-rep.component';

describe('RandomRepComponent', () => {
  let component: RandomRepComponent;
  let fixture: ComponentFixture<RandomRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
