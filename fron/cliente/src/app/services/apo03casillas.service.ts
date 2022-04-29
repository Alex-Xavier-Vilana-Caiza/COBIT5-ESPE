import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo03casilla } from '../models/Apo03';

@Injectable({
  providedIn: 'root'
})
export class Apo03casillasService {

  url = 'http://localhost:4000/api/apo03casilla/';

  constructor(private http: HttpClient){}

    getApo03casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo03casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo03casilla(apo03casilla:Apo03casilla): Observable<any> {
    return this.http.post(this.url, apo03casilla);
  }

  obtenerApo03casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo03casilla(id: string, apo03casilla: Apo03casilla): Observable<any> {
    return this.http.put(this.url + id, apo03casilla);
  }
}