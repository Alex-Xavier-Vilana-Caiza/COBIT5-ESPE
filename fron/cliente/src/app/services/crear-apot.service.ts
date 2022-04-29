import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apoT } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ApotsService {

  url = 'http://localhost:4000/api/balls/';

  constructor(private http: HttpClient){}

    getApots():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApot(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApot(apot:apoT): Observable<any> {
    return this.http.post(this.url, apot);
  }

  obtenerApot(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApot(id: string, apot: apoT): Observable<any> {
    return this.http.put(this.url + id, apot);
  }
}