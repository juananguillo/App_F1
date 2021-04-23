import { Component, h, Prop} from '@stencil/core';
//import { format } from '../../utils/utils';
//import {IDriver} from '../../../../App-F1/src/app/clases/Idriver';
//import {IRace} from '../../../../App-F1/src/app/clases/Irace';


@Component({
  tag: 'f1-table',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {


  @Prop() thone:string;
  @Prop() thtwo:string;
  @Prop() ththree:string;





  render() {
    let cols=this.thone=="Rank"?2:1;
    return  <div class="tablacont">
      <table class="styled-table">
      
    <thead>
        <tr>
            <th colSpan={cols}>{this.thone}</th>
            <th>{this.thtwo}</th>
            <th class="priority">{this.ththree}</th>
        </tr>
    </thead>
    <tbody>
    <slot name='drivers'/>
    </tbody>
</table></div>;
  
  }
}
