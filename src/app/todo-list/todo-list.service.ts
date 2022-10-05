import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos');
  }

  add(body: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', body);
  }

  edit(body: any): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${body.id}`, body)
      .pipe(catchError(() => { alert('edit error'); return of(null) }));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(catchError(() => { alert('delete error'); return of(null) }));
  }
}

export interface TodoItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
