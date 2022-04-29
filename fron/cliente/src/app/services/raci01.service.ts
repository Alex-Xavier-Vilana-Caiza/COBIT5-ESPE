import { Raci01 } from '../models/raci01';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Raci01Service {
  url = 'http://localhost:4000/api/raci01s/';
  constructor(private http: HttpClient) { }

  getRaci01():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci01(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci01(raci01: Raci01): Observable<any> {
  return this.http.post(this.url, raci01);
}

obtenerRaci01(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci01(id: string, raci01: Raci01): Observable<any> {
  return this.http.put(this.url + id, raci01);
}
}
