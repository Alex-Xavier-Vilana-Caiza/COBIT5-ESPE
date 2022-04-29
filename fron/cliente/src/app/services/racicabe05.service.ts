import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe05 } from '../models/raci05';

@Injectable({
  providedIn: 'root'
})
export class Racicabe05Service {
  url = 'http://localhost:4000/api/racicabe05s/';
  constructor(private http: HttpClient) { }

  getRacicabe05():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe05(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe05(racicabe05: Racicabe05): Observable<any> {
  return this.http.post(this.url, racicabe05);
}

obtenerRacicabe05(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe05(id: string, racicabe05: Racicabe05): Observable<any> {
  return this.http.put(this.url + id, racicabe05);
}
}
