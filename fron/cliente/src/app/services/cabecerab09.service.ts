
import { Cabecerab09 } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Cabecerab09Service {
  url = 'http://localhost:4000/api/cabecerasb09/';

  constructor(private http: HttpClient){}
    getCabecerasb09():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerab09(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerab09(Cabecerab09: Cabecerab09): Observable<any> {
    return this.http.post(this.url, Cabecerab09);
  }

  obtenerCabecerab09(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerab09(id: string, Cabecerab09: Cabecerab09): Observable<any> {
    return this.http.put(this.url + id, Cabecerab09);
  }
}