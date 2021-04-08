import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDriver } from './Idriver';



@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private urlEndPoint:string='http://localhost:8080/ranking';
  constructor(private http: HttpClient) { }

  getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this.urlEndPoint);
  }
}
