import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDriver } from '../clases/Idriver';
import { DriverService } from '../driver/driver.service';
import { RacesService } from '../races/races.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {


  route: String="";
  drivers: IDriver[] = [];
  races: String[]=[];
  url= "http://localhost:8080/ranking";

  constructor(
    private driverService: DriverService,
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
