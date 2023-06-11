import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/app/pages/registers/model/registers/register';

import { delay, first, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  private readonly API = 'api/company';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Register[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(registers => console.log('registers', registers))
      )
  }
}
