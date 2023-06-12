import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers.component';

const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'new',
        loadChildren: () => import('./register-form/register-form.module')
          .then(m => m.RegisterFormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
