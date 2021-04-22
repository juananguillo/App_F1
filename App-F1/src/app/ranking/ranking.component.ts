import { Component, Input, OnInit } from '@angular/core';
import { IDriver } from '../clases/Idriver';
import { DriverService } from '../driver/driver.service';
import { RacesService } from '../races/races.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {


  drivers: IDriver[] = [];
  races: String[]=[];
  @Input() url: string="";

  constructor(
    private driverService: DriverService,
    private racesService: RacesService
    ) { }

  ngOnInit(): void {
    this.driverService.getDrivers(this.url).subscribe(
      drivers=>this.drivers=drivers
    );

    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
  }

}
