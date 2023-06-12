import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private registersService: RegistersService
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
      .subscribe(data => {
        console.log('sucesso', data);
      });
  }

  onCancel() { }
}
