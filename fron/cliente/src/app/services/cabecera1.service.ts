
import { Cabecera1} from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cabecera1Service {
  url = 'http://localhost:4000/api/cabeceras1/';

  constructor(private http: HttpClient){}

    getCabeceras1():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecera1(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecera1(cabecera1: Cabecera1): Observable<any> {
    return this.http.post(this.url, cabecera1);
  }

  obtenerCabecera1(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecera1(id: string, cabecera1: Cabecera1): Observable<any> {
    return this.http.put(this.url + id, cabecera1);
  }
}
