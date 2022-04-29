import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo013casilla } from '../models/Apo013';

@Injectable({
  providedIn: 'root'
})
export class Apo013casillasService {

  url = 'http://localhost:4000/api/apo013casilla/';

  constructor(private http: HttpClient){}

    getApo013casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo013casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo013casilla(apo013casilla:Apo013casilla): Observable<any> {
    return this.http.post(this.url, apo013casilla);
  }

  obtenerApo013casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo013casilla(id: string, apo013casilla: Apo013casilla): Observable<any> {
    return this.http.put(this.url + id, apo013casilla);
  }
}