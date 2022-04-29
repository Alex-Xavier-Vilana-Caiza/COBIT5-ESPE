import { Cabecerab04 } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cabecerab04Service {
  url = 'http://localhost:4000/api/cabecerasb04/';

  constructor(private http: HttpClient){}
    getCabecerasb04():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerab04(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerab04(cabecerab04: Cabecerab04): Observable<any> {
    return this.http.post(this.url, cabecerab04);
  }

  obtenerCabecerab04(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerab04(id: string, cabecerab04: Cabecerab04): Observable<any> {
    return this.http.put(this.url + id, cabecerab04);
  }
}
