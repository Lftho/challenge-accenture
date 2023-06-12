import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


const MAT_MODULE = [
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCardModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    ReactiveFormsModule,
    ...MAT_MODULE
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterFormModule { }
