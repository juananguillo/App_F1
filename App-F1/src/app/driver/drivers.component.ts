import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from '../clases/Idriver';
import { RacesService } from '../races/races.service';
import{ Router, ActivatedRoute, Params} from '@angular/router';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: IDriver[] = [];
  races: String[]=[];
  url= "http://localhost:8080/ranking";
  
  constructor(private driverService: DriverService,
    private racesService: RacesService,
    private activatedRoute: ActivatedRoute, 
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let id: String= params['id'];
      let urlcorrect=!id?this.url:this.url+"?id="+id;
      console.log(this.url);
    this.driverService.getDrivers(urlcorrect).subscribe(
      drivers=>this.drivers=drivers
    );
    
    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
  })
  }

}
