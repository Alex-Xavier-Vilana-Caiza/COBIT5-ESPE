import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo08titulo } from '../models/Apo08';

@Injectable({
  providedIn: 'root'
})
export class Apo08titulosService {

  url = 'http://localhost:4000/api/apo08titulo/';

  constructor(private http: HttpClient){}

    getApo08titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo08titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo08titulo(apo08titulo:Apo08titulo): Observable<any> {
    return this.http.post(this.url, apo08titulo);
  }

  obtenerApo08titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo08titulo(id: string, apo08titulo: Apo08titulo): Observable<any> {
    return this.http.put(this.url + id, apo08titulo);
  }
}