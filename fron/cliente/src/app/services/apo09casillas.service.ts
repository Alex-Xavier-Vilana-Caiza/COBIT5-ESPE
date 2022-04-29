import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo09casilla } from '../models/Apo09';

@Injectable({
  providedIn: 'root'
})
export class Apo09casillasService {

  url = 'http://localhost:4000/api/apo09casilla/';

  constructor(private http: HttpClient){}

    getApo09casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo09casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo09casilla(apo09casilla:Apo09casilla): Observable<any> {
    return this.http.post(this.url, apo09casilla);
  }

  obtenerApo09casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo09casilla(id: string, apo09casilla: Apo09casilla): Observable<any> {
    return this.http.put(this.url + id, apo09casilla);
  }
}