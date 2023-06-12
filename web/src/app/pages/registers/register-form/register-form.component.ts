import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistersService } from 'src/app/shared/services/registers.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registersService: RegistersService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      validate: [null],
      cnpjOfCpf: [null],
      name: [null],
      cep: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registersService.save(this.form.value)
      .subscribe(data =>
        this.onSuccess(),
        error => this.onError()
      );
  }

  onCancel() {
    this.location.back();
  }


  private onSuccess() {
    this._snackBar.open('Registro salvo com sucesso', 'fechar', {
      duration: 3000
    });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar um registro', 'fechar', {
      duration: 3000
    });
  }
}
