import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first, tap } from 'rxjs/operators'
import { Register } from '../model/registers/register';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  private readonly API = 'api/company';
  //private readonly API = 'assets/register.json';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Register[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(registers => console.log('registers', registers))
      )
  }

  save(register: Register) {
    console.log('registers', register);
    return this.httpClient.post<Register>(this.API, register)
      .pipe(
        first()
      );
  }
}
