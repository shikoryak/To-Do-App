import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  userId: number | undefined;

  constructor(private http: HttpClient) { }

  createAccount(body: any): Observable<any> {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users', body)
      .pipe(tap((result) => {
        this.userId = result?.id;
      }));
  }
}
