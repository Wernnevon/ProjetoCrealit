import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
const apiUrl = 'http://localhost:3001/api/player/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlayers (): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  getPlayer(id): Observable<any> {
    return this.http.get<any>(apiUrl + id);
  }

  addPlayer (player): Observable<any> {

    console.log("passou aki");
    return this.http.post<any>(apiUrl, JSON.stringify(player));
  }

  updatePlayer(id, player: any): Observable<any> {
    return this.http.put(apiUrl, JSON.stringify(player));
  }

  deletePlayer (id): Observable<any> {
    return this.http.delete<any>(apiUrl + id);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}