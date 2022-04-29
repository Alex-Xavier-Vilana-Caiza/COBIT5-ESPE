import { Bai09 } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Bai09Service {
  url = 'http://localhost:4000/api/bai09/';

  constructor(private http: HttpClient){}

    getBai09s():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarBai09(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarBai09(bai09: Bai09): Observable<any> {
    return this.http.post(this.url, bai09);
  }

  obtenerBai09(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarBai09(id: string, bai09: Bai09): Observable<any> {
    return this.http.put(this.url + id, bai09);
  }
}
