import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe02 } from '../models/raci02';

@Injectable({
  providedIn: 'root'
})
export class Racicabe02Service {
  url = 'http://localhost:4000/api/racicabe02s/';
  constructor(private http: HttpClient) { }

  getRacicabe02():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe02(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe02(racicabe02: Racicabe02): Observable<any> {
  return this.http.post(this.url, racicabe02);
}

obtenerRacicabe02(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe02(id: string, racicabe02: Racicabe02): Observable<any> {
  return this.http.put(this.url + id, racicabe02);
}
}
