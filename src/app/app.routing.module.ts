import { RouterModule, Routes } from '@angular/router';
import { AuxComponent } from './aux/aux.component';

const routes: Routes = [
  {
    path: 'child',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
  },
  { path: 'component-aux', component: AuxComponent, outlet: 'sidebar' },
];

export const ROUTES = RouterModule.forRoot(routes);
