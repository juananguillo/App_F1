import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'driver-card',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
 
 
  @Prop() picture: string;
  @Prop() name: string;
  @Prop() age: string;
  @Prop() team: string;
  @Prop() global: number;

 

  render() {
  let pos: string| number="";
  switch (this.global) {
    case 1:
      pos="🥇";
      break;
   case 2:
     pos="🥈";
  
   case 3:
     pos="🥉";
    default:
      pos=this.global;
      break;
  }
    return<div class="container"><div class="card">
      <div class="header-driver">
       <h4>Driver Card</h4>
       </div>
      <div class="driver-body">
      <img class="imgdriver" src={this.picture}></img>
      <p>Name</p>
      <p class="content">{this.name}</p>
      <p>Age</p>
      <p class="content">{this.age}</p>
      <p>Team</p>
      <p class="content">{this.team}</p>
      <p>Global Ranking</p>
      <p class="contentpos">{pos}</p>
      </div>
    
  </div></div>;
  }
}
