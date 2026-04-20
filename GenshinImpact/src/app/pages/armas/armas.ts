import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-armas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './armas.html',
  styleUrl: './armas.css',
})
export class ArmasComponent {

  armas = [
    { nombre: 'Espada del Alba', tipo: 'Espada', rareza: 3 },
    { nombre: 'Aquila Favonia', tipo: 'Espada', rareza: 5 },
    { nombre: 'Lanza del Duelo', tipo: 'Lanza', rareza: 4 },
    { nombre: 'Arco de Amos', tipo: 'Arco', rareza: 5 },
    { nombre: 'Catalizador Favonius', tipo: 'Catalizador', rareza: 4 }
  ];

}