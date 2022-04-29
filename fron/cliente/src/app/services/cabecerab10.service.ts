
import { Cabecerab10 } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cabecerab10Service {
  url = 'http://localhost:4000/api/cabecerasb10/';

  constructor(private http: HttpClient){}
    getCabecerasb10():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerab10(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerab10(Cabecerab10: Cabecerab10): Observable<any> {
    return this.http.post(this.url, Cabecerab10);
  }

  obtenerCabecerab10(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerab10(id: string, Cabecerab10: Cabecerab10): Observable<any> {
    return this.http.put(this.url + id, Cabecerab10);
  }
}
