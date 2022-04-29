import { Cabeceraz } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabecerazService {

  url = 'http://localhost:4000/api/cabeceraz/';

  constructor(private http: HttpClient){}

    getCabecerasz():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabeceraz(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabeceraz(cabeceraz: Cabeceraz): Observable<any> {
    return this.http.post(this.url, cabeceraz);
  }

  obtenerCabeceraz(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabeceraz(id: string, cabeceraz: Cabeceraz): Observable<any> {
    return this.http.put(this.url + id, cabeceraz);
  }
}
