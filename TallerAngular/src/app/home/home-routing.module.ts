import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'series',
    children: [
      {
        path: "list",
        component: HomeComponent
      }
    ]
  },
];

export class HomeRoutingModule{}
