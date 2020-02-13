import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3001/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlayers (): Observable<any> {
    return this.http.get<any[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu os players')),
        catchError(this.handleError('getPlayers', []))
      );
  }

  getPlayer(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`leu o player id=${id}`)),
      catchError(this.handleError<any>(`getPlayer id=${id}`))
    );
  }

  addPlayer (produto): Observable<any> {
    return this.http.post<any>(apiUrl, produto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((player: any) => console.log(`adicionou o player com w/ id=${produto._id}`)),
      catchError(this.handleError<any>('addPlayer'))
    );
  }

  updatePlayer(id, player: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, player, httpOptions).pipe(
      tap(_ => console.log(`atualiza o player com id=${id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  deletePlayer (id): Observable<any> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<any>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<any>('deletePlayer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}