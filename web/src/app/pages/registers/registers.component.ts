import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/tlable';
import { RegistersService } from 'src/app/shared/services/registers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Register } from 'src/app/shared/model/registers/register';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  public registers$: Observable<Register[]>;
  public displayedColumns: string[] = ['cnpjOfCpf', 'name', 'cep', 'actions'];

  constructor(
    private registersService: RegistersService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd() {
    /** Referencia do novo registro para lista do registros */
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
