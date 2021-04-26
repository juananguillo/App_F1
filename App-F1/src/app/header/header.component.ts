import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RacesService } from '../races/races.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  races: String[]=[];

  constructor(
    private racesService: RacesService,
    public router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {

    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
  }

  back(): void {
    this.location.back();
  }

}
