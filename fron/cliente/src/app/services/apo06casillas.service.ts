import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo06casilla } from '../models/Apo06';

@Injectable({
  providedIn: 'root'
})
export class Apo06casillasService {

  url = 'http://localhost:4000/api/apo06casilla/';

  constructor(private http: HttpClient){}

    getApo06casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo06casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo06casilla(apo06casilla:Apo06casilla): Observable<any> {
    return this.http.post(this.url, apo06casilla);
  }

  obtenerApo06casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo06casilla(id: string, apo06casilla: Apo06casilla): Observable<any> {
    return this.http.put(this.url + id, apo06casilla);
  }
}