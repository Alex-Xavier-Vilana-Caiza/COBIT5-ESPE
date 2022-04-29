import { Cabecerab03 } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cabecerab03Service {
  url = 'http://localhost:4000/api/cabecerasb03/';

  constructor(private http: HttpClient){}
    getCabecerasb03():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerab03(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerab03(cabecerab03: Cabecerab03): Observable<any> {
    return this.http.post(this.url, cabecerab03);
  }

  obtenerCabecerab03(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerab03(id: string, cabecerab03: Cabecerab03): Observable<any> {
    return this.http.put(this.url + id, cabecerab03);
  }
}