import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

//MATERIALMODULE
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialModule = [
  MatToolbarModule
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ...MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
