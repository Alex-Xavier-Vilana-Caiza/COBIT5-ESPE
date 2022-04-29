import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo011titulo } from '../models/Apo011';

@Injectable({
  providedIn: 'root'
})
export class Apo011titulosService {

  url = 'http://localhost:4000/api/apo011titulo/';

  constructor(private http: HttpClient){}

    getApo011titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo011titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo011titulo(apo011titulo:Apo011titulo): Observable<any> {
    return this.http.post(this.url, apo011titulo);
  }

  obtenerApo011titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo011titulo(id: string, apo011titulo: Apo011titulo): Observable<any> {
    return this.http.put(this.url + id, apo011titulo);
  }
}