import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo012titulo } from '../models/Apo012';

@Injectable({
  providedIn: 'root'
})
export class Apo012titulosService {

  url = 'http://localhost:4000/api/apo012titulo/';

  constructor(private http: HttpClient){}

    getApo012titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo012titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo012titulo(apo012titulo:Apo012titulo): Observable<any> {
    return this.http.post(this.url, apo012titulo);
  }

  obtenerApo012titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo012titulo(id: string, apo012titulo: Apo012titulo): Observable<any> {
    return this.http.put(this.url + id, apo012titulo);
  }
}