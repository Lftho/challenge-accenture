import { Component, OnInit } from '@angular/core';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/tlable';
import { Register } from './model/registers/register';
import { RegistersService } from 'src/app/shared/services/registers.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  public registers$: Observable<Register[]>;
  public displayedColumns: string[] = ['_id', 'companyOfProvider', 'documents', 'state'];

  constructor(
    private registersService: RegistersService,
    private snackBar: MatSnackBar
  ) {
    this.registers$ = this.registersService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os registros');
          console.log(error);
          return of([]);
        })
      )
  }

  ngOnInit(): void { }

  onError(ErrorMsg: string) {
    this.snackBar.open(ErrorMsg, 'fechar', {
      duration: 3000,
    });
  }
}
