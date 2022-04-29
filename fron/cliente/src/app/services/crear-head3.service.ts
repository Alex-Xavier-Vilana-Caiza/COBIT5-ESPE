import { Head3 } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Head3Service {
  url= 'http://localhost:4000/api/heads3/';

  constructor(private http: HttpClient) { }

  getHeads3(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarHead3(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarHead3(head3: Head3): Observable<any> {
    return this.http.post(this.url, head3);
  }

  obtenerHead3(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarHead3(id: string, head3: Head3): Observable<any> {
    return this.http.put(this.url + id, head3);
  }
}
