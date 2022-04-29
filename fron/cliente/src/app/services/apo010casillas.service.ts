import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo010casilla } from '../models/Apo010';

@Injectable({
  providedIn: 'root'
})
export class Apo010casillasService {

  url = 'http://localhost:4000/api/apo010casilla/';

  constructor(private http: HttpClient){}

    getApo010casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo010casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo010casilla(apo010casilla:Apo010casilla): Observable<any> {
    return this.http.post(this.url, apo010casilla);
  }

  obtenerApo010casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo010casilla(id: string, apo010casilla: Apo010casilla): Observable<any> {
    return this.http.put(this.url + id, apo010casilla);
  }
}