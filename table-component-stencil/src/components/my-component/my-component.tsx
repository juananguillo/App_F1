import { Component, h} from '@stencil/core';
//import { format } from '../../utils/utils';
//import {IDriver} from '../../../../App-F1/src/app/clases/Idriver';
//import {IRace} from '../../../../App-F1/src/app/clases/Irace';


@Component({
  tag: 'f1-table',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {



  

  componentWillLoad() {
    
    //const drivers=document.getElementsByName("drivers")
    
  }
  



  render() {
    return <table class="styled-table">
      
    <thead>
        <tr>
            <th colSpan={2}>Rank</th>
            <th>Name</th>
            <th class="priority">Team</th>
        </tr>
    </thead>
    <tbody>
    
    <slot name='drivers'/>
  
       
       
    </tbody>
</table>;
  
  }
}
