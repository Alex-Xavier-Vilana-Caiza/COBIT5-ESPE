import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabecera6 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Cabecera6Service {
  
  url = 'http://localhost:4000/api/cabeceras6/';

  constructor(private http: HttpClient){}

    getCabeceras6():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecera6(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecera6(cabecera6: Cabecera6): Observable<any> {
    return this.http.post(this.url, cabecera6);
  }

  obtenerCabecera6(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecera6(id: string, cabecera6: Cabecera6): Observable<any> {
    return this.http.put(this.url + id, cabecera6);
  }
}
