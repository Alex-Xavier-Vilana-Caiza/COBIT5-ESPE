import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe03 } from '../models/raci03';

@Injectable({
  providedIn: 'root'
})
export class Racicabe03Service {
  url = 'http://localhost:4000/api/racicabe03s/';
  constructor(private http: HttpClient) { }

  getRacicabe03():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe03(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe03(racicabe03: Racicabe03): Observable<any> {
  return this.http.post(this.url, racicabe03);
}

obtenerRacicabe03(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe03(id: string, racicabe03: Racicabe03): Observable<any> {
  return this.http.put(this.url + id, racicabe03);
}
}
