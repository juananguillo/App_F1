import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from './Idriver';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: IDriver[] = [];
  
  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.drivers = this.driverService.getDrivers();
  }

}
