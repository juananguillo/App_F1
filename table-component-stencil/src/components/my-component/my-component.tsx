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
    return <div><slot name='drivers'></slot></div>;
  
  }
}
