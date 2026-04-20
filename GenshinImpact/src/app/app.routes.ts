import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PersonajesComponent } from './pages/personajes/personajes';
import { ArmasComponent } from './pages/armas/armas';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'armas', component: ArmasComponent }
];