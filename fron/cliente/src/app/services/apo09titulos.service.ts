import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo09titulo } from '../models/Apo09';

@Injectable({
  providedIn: 'root'
})
export class Apo09titulosService {

  url = 'http://localhost:4000/api/apo09titulo/';

  constructor(private http: HttpClient){}

    getApo09titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo09titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo09titulo(apo09titulo:Apo09titulo): Observable<any> {
    return this.http.post(this.url, apo09titulo);
  }

  obtenerApo09titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo09titulo(id: string, apo09titulo: Apo09titulo): Observable<any> {
    return this.http.put(this.url + id, apo09titulo);
  }
}