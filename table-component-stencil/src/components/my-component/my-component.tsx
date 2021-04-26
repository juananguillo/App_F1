import { Component, h} from '@stencil/core';
//import { format } from '../../utils/utils';
//import {IDriver} from '../../../../App-F1/src/app/clases/Idriver';
//import {IRace} from '../../../../App-F1/src/app/clases/Irace';


@Component({
  tag: 'f1-table',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {





  render() {
  
    return  <div class="tablacont">
      <table class="styled-table">
      
    <thead>
        <tr>
            <slot name='thead'/>
        </tr>
    </thead>
    <tbody>
    <slot name='tbody'/>
    </tbody>
</table></div>;
  
  }
}
