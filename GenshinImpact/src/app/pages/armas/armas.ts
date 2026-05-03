import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Filtro = {
  busqueda: string;
  tipo: string[];
  rareza: number[];
};

@Component({
  selector: 'app-armas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './armas.html',
  styleUrls: ['./armas.css'], // 👈 importante: styleUrls (plural)
})
export class ArmasComponent {

  armas = [
    { nombre: 'Espada del Alba', tipo: 'Espada', rareza: 3 },
    { nombre: 'Aquila Favonia', tipo: 'Espada', rareza: 5 },
    { nombre: 'Lanza del Duelo', tipo: 'Lanza', rareza: 4 },
    { nombre: 'Arco de Amos', tipo: 'Arco', rareza: 5 },
    { nombre: 'Catalizador Favonius', tipo: 'Catalizador', rareza: 4 },
    { nombre: 'Mandoble de Roca', tipo: 'Mandoble', rareza: 3 },
    { nombre: 'Espada del Sacrificio', tipo: 'Espada', rareza: 4 },
    { nombre: 'Lanza de Favonius', tipo: 'Lanza', rareza: 4 },
    { nombre: 'Arco de Favonius', tipo: 'Arco', rareza: 4 },
    { nombre: 'Catalizador de Favonius', tipo: 'Catalizador', rareza: 4 },
    { nombre: 'Mandoble de Favonius', tipo: 'Mandoble', rareza: 4 },

  ];

  armasOriginal = [...this.armas];

  filtro: Filtro = {
    busqueda: '',
    tipo: [],
    rareza: []
  };

  toggleFiltro(categoria: 'tipo' | 'rareza', valor: string | number) {
    const lista = this.filtro[categoria] as any[];

    const index = lista.indexOf(valor);

    if (index === -1) {
      lista.push(valor);
    } else {
      lista.splice(index, 1);
    }
  }

  get armasFiltradas() {
    return this.armas.filter(a => {
      const coincideBusqueda = a.nombre
        .toLowerCase()
        .includes(this.filtro.busqueda.toLowerCase());

      const coincideTipo =
        this.filtro.tipo.length === 0 ||
        this.filtro.tipo.includes(a.tipo);

      const coincideRareza =
        this.filtro.rareza.length === 0 ||
        this.filtro.rareza.includes(a.rareza);

      return coincideBusqueda && coincideTipo && coincideRareza;
    });
  }
}