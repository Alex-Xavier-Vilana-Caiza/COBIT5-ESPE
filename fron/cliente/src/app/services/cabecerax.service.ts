
import { Cabecerau } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabeceraxService {

  url = 'http://localhost:4000/api/cabecerax/';

  constructor(private http: HttpClient){}

    getCabecerasx():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecerax(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecerax(cabecerax: Cabecerau): Observable<any> {
    return this.http.post(this.url, cabecerax);
  }

  obtenerCabecerax(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecerax(id: string, cabecerax: Cabecerau): Observable<any> {
    return this.http.put(this.url + id, cabecerax);
  }
}
