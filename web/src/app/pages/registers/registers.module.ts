import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';

const MaterialModule = [
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    ...MaterialModule,
    MatSnackBarModule
  ],
  exports: [
    RegistersComponent
  ]
})
export class RegistersModule { }
