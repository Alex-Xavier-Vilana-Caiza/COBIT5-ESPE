import { Head } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadService {
  url= 'http://localhost:4000/api/heads/';

  constructor(private http: HttpClient) { }

  getHeads(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarHead(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarHead(head: Head): Observable<any> {
    return this.http.post(this.url, head);
  }

  obtenerHead(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarHead(id: string, head: Head): Observable<any> {
    return this.http.put(this.url + id, head);
  }
}
