import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class PersonajesComponent {

  personajes = [
  { nombre: 'Diluc', elemento: 'Pyro' },
  { nombre: 'Raiden Shogun', elemento: 'Electro' },
  { nombre: 'Venti', elemento: 'Anemo' },
  { nombre: 'Ayaka', elemento: 'Cryo' },
  { nombre: 'Zhongli', elemento: 'Geo' },
  { nombre: 'Tartaglia', elemento: 'Hydro' }
];

}