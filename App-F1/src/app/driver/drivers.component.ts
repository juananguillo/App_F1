import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from '../clases/Idriver';
import{ Router, ActivatedRoute, Params} from '@angular/router';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  route: String="";
  drivers: IDriver[] = [];
  url= "http://localhost:8080/ranking";
  
  constructor(private driverService: DriverService,
    private activatedRoute: ActivatedRoute, 
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let id: String= params['id'];
      this.route=!id?"Rankin Global": "Ranking "+id;
      let urlcorrect=!id?this.url:this.url+"?id="+id;
    this.driverService.getDrivers(urlcorrect).subscribe(
      drivers=>this.drivers=drivers
    );
    
   
  })
  }

}
