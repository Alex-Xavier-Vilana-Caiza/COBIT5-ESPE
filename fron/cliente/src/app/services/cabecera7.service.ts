import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabecera7 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Cabecera7Service {
  url = 'http://localhost:4000/api/cabeceras7/';

  constructor(private http: HttpClient){}

    getCabeceras7():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarCabecera7(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarCabecera7(cabecera7: Cabecera7): Observable<any> {
    return this.http.post(this.url, cabecera7);
  }

  obtenerCabecera7(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCabecera7(id: string, cabecera7: Cabecera7): Observable<any> {
    return this.http.put(this.url + id, cabecera7);
  }
}
