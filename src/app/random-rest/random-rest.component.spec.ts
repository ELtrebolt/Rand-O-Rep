import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRestComponent } from './random-rest.component';

describe('RandomRestComponent', () => {
  let component: RandomRestComponent;
  let fixture: ComponentFixture<RandomRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
