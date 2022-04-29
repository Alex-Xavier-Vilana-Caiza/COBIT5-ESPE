import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raci03 } from '../models/raci03';

@Injectable({
  providedIn: 'root'
})
export class Raci03Service {
  url = 'http://localhost:4000/api/raci03s/';

  constructor(private http: HttpClient) { }

  getRaci03():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci03(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci03(raci03: Raci03): Observable<any> {
  return this.http.post(this.url, raci03);
}

obtenerRaci03(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci03(id: string, raci03: Raci03): Observable<any> {
  return this.http.put(this.url + id, raci03);
}
}
