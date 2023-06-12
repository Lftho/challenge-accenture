import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

//MAT_MODULE
import { MatToolbarModule } from '@angular/material/toolbar';

const MAT_MODULE = [
  MatToolbarModule
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ...MAT_MODULE
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
