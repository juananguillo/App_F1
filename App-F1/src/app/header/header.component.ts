import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RacesService } from '../races/races.service';
import { Location } from '@angular/common';
import {lightSpeedInAnimation} from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
      lightSpeedInAnimation(), 
  ]
})
export class HeaderComponent implements OnInit {

  races: String[]=[];


  animationState = false;
  private animationWithState = false;

  constructor(
    private racesService: RacesService,
    public router: Router,
    private location: Location,
    ) { }

  ngOnInit(): void {

    this.racesService.getraces().subscribe(
      races=>this.races=races
    );
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 5);

  }

  back(): void {
    this.location.back();
  }


  
}
