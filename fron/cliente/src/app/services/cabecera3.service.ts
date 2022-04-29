import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabecera3 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Cabecera3Service {

  url = 'http://localhost:4000/api/cabeceras3/';

  constructor(private http: HttpClient){}

    getCabeceras3():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecera3(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecera3(cabecera3: Cabecera3): Observable<any> {
    return this.http.post(this.url, cabecera3);
  }

  obtenerCabecera3(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecera3(id: string, cabecera3: Cabecera3): Observable<any> {
    return this.http.put(this.url + id, cabecera3);
  }
}
