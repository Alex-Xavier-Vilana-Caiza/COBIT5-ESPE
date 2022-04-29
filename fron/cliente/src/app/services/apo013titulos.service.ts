import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo013titulo } from '../models/Apo013';

@Injectable({
  providedIn: 'root'
})
export class Apo013titulosService {

  url = 'http://localhost:4000/api/apo013titulo/';

  constructor(private http: HttpClient){}

    getApo013titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo013titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo013titulo(apo013titulo:Apo013titulo): Observable<any> {
    return this.http.post(this.url, apo013titulo);
  }

  obtenerApo013titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo013titulo(id: string, apo013titulo: Apo013titulo): Observable<any> {
    return this.http.put(this.url + id, apo013titulo);
  }
}