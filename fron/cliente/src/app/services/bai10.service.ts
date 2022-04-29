import { Bai10 } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Bai10Service {
  url = 'http://localhost:4000/api/bai10/';

  constructor(private http: HttpClient){}

    getBai10s():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarBai10(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarBai10(bai10: Bai10): Observable<any> {
    return this.http.post(this.url, bai10);
  }

  obtenerBai10(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarBai10(id: string, bai10: Bai10): Observable<any> {
    return this.http.put(this.url + id, bai10);
  }
}