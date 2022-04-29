import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo07titulo } from '../models/Apo07';

@Injectable({
  providedIn: 'root'
})
export class Apo07titulosService {

  url = 'http://localhost:4000/api/apo07titulo/';

  constructor(private http: HttpClient){}

    getApo07titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo07titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo07titulo(apo07titulo:Apo07titulo): Observable<any> {
    return this.http.post(this.url, apo07titulo);
  }

  obtenerApo07titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo07titulo(id: string, apo07titulo: Apo07titulo): Observable<any> {
    return this.http.put(this.url + id, apo07titulo);
  }
}