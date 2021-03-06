import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDriver } from '../clases/Idriver';
import { DriverService } from '../driver/driver.service';
import {trigger, style, transition, animate, state} from '@angular/animations';
import {bounceAnimation} from 'angular-animations';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(400, style({
          transform: 'translateX(0)',
          opacity: 1
        }))

      ])
    ]),
    bounceAnimation()
  ]
})
export class RankingComponent implements OnInit {


  route: String="";
  drivers: IDriver[] = [];
  url= "http://localhost:8080/ranking";
  animationState = false;
  private animationWithState = false;

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
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
    
   
  })

  }

}
