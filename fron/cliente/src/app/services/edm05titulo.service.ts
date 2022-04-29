import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edm05titulo } from '../models/Edm05';

@Injectable({
  providedIn: 'root'
})
export class Edm05titulosService {

  url = 'http://localhost:4000/api/edm05titulo/';

  constructor(private http: HttpClient){}

    getEdm05titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarEdm05titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarEdm05titulo(edm05titulo:Edm05titulo): Observable<any> {
    return this.http.post(this.url, edm05titulo);
  }

  obtenerEdm05titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarEdm05titulo(id: string, edm05titulo: Edm05titulo): Observable<any> {
    return this.http.put(this.url + id, edm05titulo);
  }
}