import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cabR } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class SecondsService {

  url = 'http://localhost:4000/api/seconds/';

  constructor(private http: HttpClient){}

    getSeconds():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarSecond(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarSecond(second:cabR): Observable<any> {
    return this.http.post(this.url, second);
  }

  obtenerSecond(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarSecond(id: string, second: cabR): Observable<any> {
    return this.http.put(this.url + id, second);
  }
}