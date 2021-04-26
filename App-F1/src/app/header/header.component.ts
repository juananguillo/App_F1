import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RacesService } from '../races/races.service';
import { Location } from '@angular/common';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))

      ])
    ])
  ]
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
