import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { IDriver } from '../clases/Idriver';
import{ Router, ActivatedRoute, Params} from '@angular/router';
import { compileNgModule } from '@angular/compiler';
import {zoomInAnimation, bounceAnimation} from 'angular-animations';
import {trigger, style, transition, animate, state} from '@angular/animations';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
  animations:[
  zoomInAnimation(), 
  bounceAnimation(),
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
  ])
  ]
})
export class DriversComponent implements OnInit {
  rubber = true;
  driver= {} as IDriver;
  url= "http://localhost:8080/driver";
  
  animationState = false;
  animationWithState = false;

  
  constructor(private driverService: DriverService,
    private activatedRoute: ActivatedRoute, 
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let id: String= params['id'];
      let urlcorrect=this.url+"?id="+id;
    this.driverService.getDriver(urlcorrect).subscribe(
      driver=>this.driver=driver
    );

    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 4);
  
    
   
  })
  }

}
