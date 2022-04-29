import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo05titulo } from '../models/Apo05';

@Injectable({
  providedIn: 'root'
})
export class Apo05titulosService {

  url = 'http://localhost:4000/api/apo05titulo/';

  constructor(private http: HttpClient){}

    getApo05titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo05titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo05titulo(apo05titulo:Apo05titulo): Observable<any> {
    return this.http.post(this.url, apo05titulo);
  }

  obtenerApo05titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo05titulo(id: string, apo05titulo: Apo05titulo): Observable<any> {
    return this.http.put(this.url + id, apo05titulo);
  }
}