import { Component, OnInit } from '@angular/core';
import { RacesService } from './races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {


  races: String[]=[];

  constructor(private racesService: RacesService) { }

  ngOnInit(): void {
    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
  }

}
