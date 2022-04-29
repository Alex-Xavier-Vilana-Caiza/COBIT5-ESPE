import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edm01titulo } from '../models/Edm01';

@Injectable({
  providedIn: 'root'
})
export class Edm01titulosService {

  url = 'http://localhost:4000/api/edm01titulo/';

  constructor(private http: HttpClient){}

    getEdm01titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarEdm01titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarEdm01titulo(edm01titulo:Edm01titulo): Observable<any> {
    return this.http.post(this.url, edm01titulo);
  }

  obtenerEdm01titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarEdm01titulo(id: string, edm01titulo: Edm01titulo): Observable<any> {
    return this.http.put(this.url + id, edm01titulo);
  }
}