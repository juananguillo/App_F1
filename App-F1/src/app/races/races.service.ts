import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  private urlEndPoint:string='http://localhost:8080/races';
  constructor(private http: HttpClient) { }

  getraces(): Observable<String[]>{
    return this.http.get<String[]>(this.urlEndPoint);
  }
}
