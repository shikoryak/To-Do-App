import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }

  createAccount(body: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  }
}
