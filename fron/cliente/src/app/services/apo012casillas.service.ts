import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo012casilla } from '../models/Apo012';

@Injectable({
  providedIn: 'root'
})
export class Apo012casillasService {

  url = 'http://localhost:4000/api/apo012casilla/';

  constructor(private http: HttpClient){}

    getApo012casillas():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo012casilla(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo012casilla(apo012casilla:Apo012casilla): Observable<any> {
    return this.http.post(this.url, apo012casilla);
  }

  obtenerApo012casilla(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo012casilla(id: string, apo012casilla: Apo012casilla): Observable<any> {
    return this.http.put(this.url + id, apo012casilla);
  }
}