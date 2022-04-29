
import { Cabecerab05 } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cabecerab05Service {
  url = 'http://localhost:4000/api/cabecerasb05/';

  constructor(private http: HttpClient){}
    getCabecerasb05():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerab05(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerab05(Cabecerab05: Cabecerab05): Observable<any> {
    return this.http.post(this.url, Cabecerab05);
  }

  obtenerCabecerab05(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerab05(id: string, Cabecerab05: Cabecerab05): Observable<any> {
    return this.http.put(this.url + id, Cabecerab05);
  }
}
