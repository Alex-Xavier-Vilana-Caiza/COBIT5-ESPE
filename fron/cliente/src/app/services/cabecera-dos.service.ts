import { CabeceraDos } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabeceraDosService {
  url= 'http://localhost:4000/api/cabecerados/';

  constructor(private http: HttpClient) { }

  getCabeceradoss(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarCabecerados(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCabecerados(cabecerados: CabeceraDos): Observable<any> {
    return this.http.post(this.url, cabecerados);
  }

  obtenerCabecerados(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarCabecerados(id: string, cabecerados: CabeceraDos): Observable<any> {
    return this.http.put(this.url + id, cabecerados);
  }
}