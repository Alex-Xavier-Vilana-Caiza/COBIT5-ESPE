import { Apo } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   
})
export class ApoService {
  url= 'http://localhost:4000/api/cats/';

  constructor(private http: HttpClient) { }

  getApos(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarApo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarApo(apo: Apo): Observable<any> {
    return this.http.post(this.url, apo);
  }

  obtenerApo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarApo(id: string, apo: Apo): Observable<any> {
    return this.http.put(this.url + id, apo);
  }
}
