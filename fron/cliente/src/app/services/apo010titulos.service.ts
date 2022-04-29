import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo010titulo } from '../models/Apo010';

@Injectable({
  providedIn: 'root'
})
export class Apo010titulosService {

  url = 'http://localhost:4000/api/apo010titulo/';

  constructor(private http: HttpClient){}

    getApo010titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo010titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo010titulo(apo010titulo:Apo010titulo): Observable<any> {
    return this.http.post(this.url, apo010titulo);
  }

  obtenerApo010titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo010titulo(id: string, apo010titulo: Apo010titulo): Observable<any> {
    return this.http.put(this.url + id, apo010titulo);
  }
}