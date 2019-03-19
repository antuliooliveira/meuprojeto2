// Este é o nosso mapa de rotas atribuido ao AppModule //
import {Routes} from '@angular/router';

import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversão', component: DiversaoComponent}
]

