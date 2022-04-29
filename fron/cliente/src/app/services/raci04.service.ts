import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raci04 } from './../models/raci04';

@Injectable({
  providedIn: 'root'
})
export class Raci04Service {
  url = 'http://localhost:4000/api/raci04s/';
  constructor(private http: HttpClient) { }

  getRaci04():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci04(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci04(raci04: Raci04): Observable<any> {
  return this.http.post(this.url, raci04);
}

obtenerRaci04(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci04(id: string, raci04: Raci04): Observable<any> {
  return this.http.put(this.url + id, raci04);
}
}
