import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDriver } from '../clases/Idriver';



@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor(private http: HttpClient) { }

  getDrivers(url: string): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(url);
  }
}
