import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raci02 } from '../models/raci02';

@Injectable({
  providedIn: 'root'
})
export class Raci02Service {
  url = 'http://localhost:4000/api/raci02s/';
  constructor(private http: HttpClient) { }

  getRaci02():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci02(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci02(raci02: Raci02): Observable<any> {
  return this.http.post(this.url, raci02);
}

obtenerRaci02(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci02(id: string, raci02: Raci02): Observable<any> {
  return this.http.put(this.url + id, raci02);
}
}
