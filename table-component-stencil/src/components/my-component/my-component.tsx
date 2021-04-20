import { Component, h, State} from '@stencil/core';
//import { format } from '../../utils/utils';
import {IDriver} from '../../../../App-F1/src/app/clases/Idriver';
//import {IRace} from '../../../../App-F1/src/app/clases/Irace';


@Component({
  tag: 'f1-table',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() drivers: IDriver[]=[];


  componentWillLoad() {
    
    fetch('http://localhost:8080/ranking')
      .then((response: Response) => response.json())
      .then(response => {
        this.drivers= response;
      });
      
    
  }
  



  render() {
    return <table class="styled-table">
      
    <thead>
        <tr>
            <th colSpan={2}>Rank</th>
            <th>Name</th>
            <th>Team</th>
        </tr>
    </thead>
    <tbody>
    
    { 
      this.drivers.map((driver, pos)=>
      <tr>
        <td><a href="#"><img id="minpic" src={driver.picture}></img></a></td>
      <td>{pos+1}</td>
      <td>{driver.name}</td>
      <td>{driver.team}</td>
  </tr>
      )}
  
       
       
    </tbody>
</table>;
  
  }
}
