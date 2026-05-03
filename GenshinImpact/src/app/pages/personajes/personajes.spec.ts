import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personajes';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
