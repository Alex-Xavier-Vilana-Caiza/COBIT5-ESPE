import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo04titulo } from '../models/Apo04';

@Injectable({
  providedIn: 'root'
})
export class Apo04titulosService {

  url = 'http://localhost:4000/api/apo04titulo/';

  constructor(private http: HttpClient){}

    getApo04titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo04titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo04titulo(apo04titulo:Apo04titulo): Observable<any> {
    return this.http.post(this.url, apo04titulo);
  }

  obtenerApo04titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo04titulo(id: string, apo04titulo: Apo04titulo): Observable<any> {
    return this.http.put(this.url + id, apo04titulo);
  }
}