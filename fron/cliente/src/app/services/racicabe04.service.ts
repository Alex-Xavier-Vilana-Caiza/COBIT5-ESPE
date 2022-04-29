import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe04 } from '../models/raci04';

@Injectable({
  providedIn: 'root'
})
export class Racicabe04Service {
  url = 'http://localhost:4000/api/racicabe04s/';
  constructor(private http: HttpClient) { }

  getRacicabe04():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe04(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe04(racicabe04: Racicabe04): Observable<any> {
  return this.http.post(this.url, racicabe04);
}

obtenerRacicabe04(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe04(id: string, racicabe04: Racicabe04): Observable<any> {
  return this.http.put(this.url + id, racicabe04);
}
}
