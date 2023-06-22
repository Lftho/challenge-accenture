import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public form: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder
  ) {
    this.form = this.formBuilder.group({
      cnpjOfCpf: [null],
      name: [null],
      cep: [null]
    });


  }

  ngOnInit(): void {
  }

}
