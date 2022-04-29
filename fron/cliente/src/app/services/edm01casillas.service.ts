import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edm01casillas } from '../models/Edm01';

@Injectable({
  providedIn: 'root'
})
export class Edm01casillasService {

  url = 'http://localhost:4000/api/edm01casilla/';

  constructor(private http: HttpClient){}

    getEdm01casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarEdm01casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarEdm01casilla(edm01casilla:Edm01casillas): Observable<any> {
    return this.http.post(this.url, edm01casilla);
  }

  obtenerEdm01casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarEdm01casilla(id: string, edm01casilla: Edm01casillas): Observable<any> {
    return this.http.put(this.url + id, edm01casilla);
  }
}
