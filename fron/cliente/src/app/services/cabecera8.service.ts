import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabecera8 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Cabecera8Service {
  
  url = 'http://localhost:4000/api/cabeceras8/';

  constructor(private http: HttpClient){}

    getCabeceras8():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecera8(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecera8(cabecera8: Cabecera8): Observable<any> {
    return this.http.post(this.url, cabecera8);
  }

  obtenerCabecera8(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecera8(id: string, cabecera8: Cabecera8): Observable<any> {
    return this.http.put(this.url + id, cabecera8);
  }
}
