import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo07casilla } from '../models/Apo07';

@Injectable({
  providedIn: 'root'
})
export class Apo07casillasService {

  url = 'http://localhost:4000/api/apo07casilla/';

  constructor(private http: HttpClient){}

    getApo07casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo07casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo07casilla(apo07casilla:Apo07casilla): Observable<any> {
    return this.http.post(this.url, apo07casilla);
  }

  obtenerApo07casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo07casilla(id: string, apo07casilla: Apo07casilla): Observable<any> {
    return this.http.put(this.url + id, apo07casilla);
  }
}