import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo06titulo } from '../models/Apo06';

@Injectable({
  providedIn: 'root'
})
export class Apo06titulosService {

  url = 'http://localhost:4000/api/apo06titulo/';

  constructor(private http: HttpClient){}

    getApo06titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo06titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo06titulo(apo06titulo:Apo06titulo): Observable<any> {
    return this.http.post(this.url, apo06titulo);
  }

  obtenerApo06titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo06titulo(id: string, apo06titulo: Apo06titulo): Observable<any> {
    return this.http.put(this.url + id, apo06titulo);
  }
}