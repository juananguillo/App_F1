import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from '../clases/Idriver';
import{ Router, ActivatedRoute, Params} from '@angular/router';
import { compileNgModule } from '@angular/compiler';
import {rubberBandAnimation } from 'angular-animations';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
  animations:[
    rubberBandAnimation(), 
  ]
})
export class DriversComponent implements OnInit {
  rubber = false;
  driver= {} as IDriver;
  url= "http://localhost:8080/driver";
  
  
  constructor(private driverService: DriverService,
    private activatedRoute: ActivatedRoute, 
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let id: String= params['id'];
      let urlcorrect=this.url+"?id="+id;
    this.driverService.getDriver(urlcorrect).subscribe(
      driver=>this.driver=driver
    );
    
   
  })
  }

}
