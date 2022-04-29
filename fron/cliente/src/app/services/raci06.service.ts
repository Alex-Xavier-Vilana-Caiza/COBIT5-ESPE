import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raci06 } from 'src/app/models/raci06';

@Injectable({
  providedIn: 'root'
})
export class Raci06Service {
  url = 'http://localhost:4000/api/raci06s/';
  constructor(private http: HttpClient) { }

  getRaci06():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci06(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci06(raci06: Raci06): Observable<any> {
  return this.http.post(this.url, raci06);
}

obtenerRaci06(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci06(id: string, raci06: Raci06): Observable<any> {
  return this.http.put(this.url + id, raci06);
}
}
