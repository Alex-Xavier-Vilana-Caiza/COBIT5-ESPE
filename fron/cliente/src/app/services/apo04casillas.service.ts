import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo04casilla } from '../models/Apo04';

@Injectable({
  providedIn: 'root'
})
export class Apo04casillasService {

  url = 'http://localhost:4000/api/apo04casilla/';

  constructor(private http: HttpClient){}

    getApo04casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo04casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo04casilla(apo04casilla:Apo04casilla): Observable<any> {
    return this.http.post(this.url, apo04casilla);
  }

  obtenerApo04casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo04casilla(id: string, apo04casilla: Apo04casilla): Observable<any> {
    return this.http.put(this.url + id, apo04casilla);
  }
}