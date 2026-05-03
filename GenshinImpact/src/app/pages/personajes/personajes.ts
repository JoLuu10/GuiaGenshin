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
  { nombre: 'Amber', elemento: 'Pyro', rareza: 4, arma: "Arco" },
  { nombre: 'Kaeya', elemento: 'Cryo', rareza: 4, arma: "Espada" },
  { nombre: 'Lisa', elemento: 'Electro', rareza: 4, arma: "Catalizador" },
  { nombre: 'Jean', elemento: 'Anemo', rareza: 5, arma: "Espada" },
  { nombre: 'Diluc', elemento: 'Pyro', rareza: 5, arma: "Mandoble" },
  { nombre: 'Mona', elemento: 'Hydro', rareza: 5, arma: "Catalizador" },
  { nombre: 'Eula', elemento: 'Cryo', rareza: 5, arma: "Mandoble" },
  { nombre: 'Barbara', elemento: 'Hydro', rareza: 4, arma: "Catalizador" },
  { nombre: 'Bennett', elemento: 'Pyro', rareza: 4, arma: "Espada" },
  { nombre: 'Albedo', elemento: 'Geo', rareza: 5, arma: "Espada" },
  { nombre: 'Razor', elemento: 'Electro', rareza: 4, arma: "Mandoble" },
  { nombre: 'Venti', elemento: 'Anemo', rareza: 5, arma: "Arco" },
  { nombre: 'Fischl', elemento: 'Electro', rareza: 4, arma: "Arco" },
  { nombre: 'Klee', elemento: 'Pyro', rareza: 5, arma: "Catalizador" },
  { nombre: 'Sacarosa', elemento: 'Anemo', rareza: 4, arma: "Catalizador" },
  { nombre: 'Noelle', elemento: 'Geo', rareza: 4, arma: "Mandoble" },
  { nombre: 'Diona', elemento: 'Cryo', rareza: 4, arma: "Arco" },
  { nombre: 'Rosaria', elemento: 'Cryo', rareza: 4, arma: "Lanza" },
  { nombre: 'Mika', elemento: 'Cryo', rareza: 4, arma: "Lanza" },
  { nombre: 'Dahlia', elemento: 'Hydro', rareza: 4, arma: "Espada" },
  { nombre: 'Durin', elemento: 'Pyro', rareza: 5, arma: "Espada" },
  { nombre: 'Varka', elemento: 'Anemo', rareza: 5, arma: "Mandoble" },

];

}