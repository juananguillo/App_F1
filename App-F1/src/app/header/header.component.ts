import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacesService } from '../races/races.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  races: String[]=[];

  constructor(
    private racesService: RacesService,
    private activatedRoute: ActivatedRoute, 
    ) { }

  ngOnInit(): void {

    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
  }

}
