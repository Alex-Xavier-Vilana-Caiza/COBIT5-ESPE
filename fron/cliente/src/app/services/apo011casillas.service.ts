import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo011casilla } from '../models/Apo011';

@Injectable({
  providedIn: 'root'
})
export class Apo011casillasService {

  url = 'http://localhost:4000/api/apo011casilla/';

  constructor(private http: HttpClient){}

    getApo011casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo011casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo011casilla(apo011casilla:Apo011casilla): Observable<any> {
    return this.http.post(this.url, apo011casilla);
  }

  obtenerApo011casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo011casilla(id: string, apo011casilla: Apo011casilla): Observable<any> {
    return this.http.put(this.url + id, apo011casilla);
  }
}