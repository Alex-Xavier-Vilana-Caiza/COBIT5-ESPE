import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apo03titulo } from '../models/Apo03';

@Injectable({
  providedIn: 'root'
})
export class Apo03titulosService {

  url = 'http://localhost:4000/api/apo03titulo/';

  constructor(private http: HttpClient){}

    getApo03titulos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarApo03titulo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarApo03titulo(apo03titulo:Apo03titulo): Observable<any> {
    return this.http.post(this.url, apo03titulo);
  }

  obtenerApo03titulo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarApo03titulo(id: string, apo03titulo: Apo03titulo): Observable<any> {
    return this.http.put(this.url + id, apo03titulo);
  }
}