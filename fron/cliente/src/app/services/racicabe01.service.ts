import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe01 } from '../models/raci01';

@Injectable({
  providedIn: 'root'
})
export class Racicabe01Service {
  url = 'http://localhost:4000/api/racicabe01s/';
  constructor(private http: HttpClient) { }

  getRacicabe01():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe01(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe01(racicabe01: Racicabe01): Observable<any> {
  return this.http.post(this.url, racicabe01);
}

obtenerRacicabe01(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe01(id: string, racicabe01: Racicabe01): Observable<any> {
  return this.http.put(this.url + id, racicabe01);
}
}
