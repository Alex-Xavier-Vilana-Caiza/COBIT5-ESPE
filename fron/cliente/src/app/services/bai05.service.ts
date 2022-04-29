import { BAI05 } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Bai05Service {
  url = 'http://localhost:4000/api/bai05/';

  constructor(private http: HttpClient){}

    getBai05s():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarBai05(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarBai05(bai05: BAI05): Observable<any> {
    return this.http.post(this.url, bai05);
  }

  obtenerBai05(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarBai05(id: string, bai05: BAI05): Observable<any> {
    return this.http.put(this.url + id, bai05);
  }
}