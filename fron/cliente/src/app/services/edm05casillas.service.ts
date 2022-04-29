import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edm05casillas } from '../models/Edm05';

@Injectable({
  providedIn: 'root'
})
export class Edm05casillasService {

  url = 'http://localhost:4000/api/edm05casilla/';

  constructor(private http: HttpClient){}

    getEdm05casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarEdm05casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarEdm05casilla(edm05casilla:Edm05casillas): Observable<any> {
    return this.http.post(this.url, edm05casilla);
  }

  obtenerEdm05casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarEdm05casilla(id: string, edm05casilla: Edm05casillas): Observable<any> {
    return this.http.put(this.url + id, edm05casilla);
  }
}
