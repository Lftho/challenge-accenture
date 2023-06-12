import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';

const MAT_MODULE = [
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    ...MAT_MODULE,
    MatSnackBarModule
  ],
  exports: [
    RegistersComponent
  ]
})
export class RegistersModule { }
