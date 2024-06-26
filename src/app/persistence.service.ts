import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rectangle } from './model/rectangle';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private apiUrl = 'http://localhost:4200/api/rectangle';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor( private http:HttpClient) { }


  getRectangle(): Observable<Rectangle> {
    return this.http.get<Rectangle>(this.apiUrl)
    .pipe(
      catchError(this.handleError<Rectangle>('Error querying rectangle data'))
    );
  }

  updateRectangle(rectangle: Rectangle): Observable<any> {
    return this.http.put(this.apiUrl,rectangle).pipe(
      catchError(this.handleError<any>("Error updating rectangle"))
    );

  }
  
  private handleError<T>(operation = 'operation', result?:T){
    return (error:any): Observable<T> => {
      console.log(operation);

      return of(result as T);
    }
  }

}
