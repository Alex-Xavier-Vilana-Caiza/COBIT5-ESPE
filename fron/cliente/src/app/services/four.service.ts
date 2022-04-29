import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cabR4 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FoursService {

  url = 'http://localhost:4000/api/fours/';

  constructor(private http: HttpClient){}

    getFours():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarFour(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarFour(four:cabR4): Observable<any> {
    return this.http.post(this.url, four);
  }

  obtenerFour(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarFour(id: string, four: cabR4): Observable<any> {
    return this.http.put(this.url + id, four);
  }
}