import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 🎯 Tipo de filtro bien definido
type Filtro = {
  busqueda: string;
  armas: string[];
  elementos: string[];
  rareza: number[];
};

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // 🔥 copia original
  personajesOriginal = [...this.personajes];

  // 🎯 estado de filtros
  filtro: Filtro = {
    busqueda: '',
    armas: [],
    elementos: [],
    rareza: []
  };

  // 🧠 getter con filtrado
  get personajesFiltrados() {
    return this.personajesOriginal.filter(p => {

      const coincideBusqueda = p.nombre
        .toLowerCase()
        .includes(this.filtro.busqueda.toLowerCase());

      const coincideArma =
        this.filtro.armas.length === 0 ||
        this.filtro.armas.includes(p.arma);

      const coincideElemento =
        this.filtro.elementos.length === 0 ||
        this.filtro.elementos.includes(p.elemento);

      const coincideRareza =
        this.filtro.rareza.length === 0 ||
        this.filtro.rareza.includes(p.rareza);

      return (
        coincideBusqueda &&
        coincideArma &&
        coincideElemento &&
        coincideRareza
      );
    });
  }

  // 🔁 toggle filtros (sin errores de TypeScript)
  toggleFiltro(tipo: 'armas' | 'elementos' | 'rareza', valor: string | number) {

    if (tipo === 'rareza') {
      const lista = this.filtro.rareza;

      this.filtro.rareza = lista.includes(valor as number)
        ? lista.filter(v => v !== valor)
        : [...lista, valor as number];

    } else {
      const lista = this.filtro[tipo];

      this.filtro[tipo] = lista.includes(valor as string)
        ? lista.filter(v => v !== valor)
        : [...lista, valor as string];
    }
  }
}