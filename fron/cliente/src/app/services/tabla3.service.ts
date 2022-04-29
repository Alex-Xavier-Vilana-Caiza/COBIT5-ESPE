
import {  tabla3 } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tabla3Service {
  url = 'http://localhost:4000/api/tabla3/';

  constructor(private http: HttpClient){}

    getTablas33():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTabla3(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTabla3(tabla3: tabla3): Observable<any> {
    return this.http.post(this.url, tabla3);
  }

  obtenerTabla3(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTabla3(id: string, tabla3: tabla3): Observable<any> {
    return this.http.put(this.url + id, tabla3);
  }
}
