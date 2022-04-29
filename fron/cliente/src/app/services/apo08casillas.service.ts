import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo08casilla } from '../models/Apo08';

@Injectable({
  providedIn: 'root'
})
export class Apo08casillasService {

  url = 'http://localhost:4000/api/apo08casilla/';

  constructor(private http: HttpClient){}

    getApo08casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo08casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo08casilla(apo08casilla:Apo08casilla): Observable<any> {
    return this.http.post(this.url, apo08casilla);
  }

  obtenerApo08casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo08casilla(id: string, apo08casilla: Apo08casilla): Observable<any> {
    return this.http.put(this.url + id, apo08casilla);
  }
}