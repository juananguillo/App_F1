import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from '../clases/Idriver';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: IDriver[] = [];
  
  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(
      drivers=>this.drivers=drivers
    );
  }

}
