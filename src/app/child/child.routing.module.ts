import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {
    path: ':id',
    component: ChildComponent,
  },
];

export const routing = RouterModule.forChild(routes);
