import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo05casilla } from '../models/Apo05';

@Injectable({
  providedIn: 'root'
})
export class Apo05casillasService {

  url = 'http://localhost:4000/api/apo05casilla/';

  constructor(private http: HttpClient){}

    getApo05casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo05casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo05casilla(apo05casilla:Apo05casilla): Observable<any> {
    return this.http.post(this.url, apo05casilla);
  }

  obtenerApo05casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo05casilla(id: string, apo05casilla: Apo05casilla): Observable<any> {
    return this.http.put(this.url + id, apo05casilla);
  }
}