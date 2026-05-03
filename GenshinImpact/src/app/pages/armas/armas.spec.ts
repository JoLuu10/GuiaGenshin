import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmasComponent } from './armas';

describe('ArmasComponent', () => {
  let component: ArmasComponent;
  let fixture: ComponentFixture<ArmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArmasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
