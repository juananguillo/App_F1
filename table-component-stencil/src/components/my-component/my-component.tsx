import { Component, Prop, h, Watch} from '@stencil/core';
//import { format } from '../../utils/utils';
import {IDriver} from '../../../../App-F1/src/app/clases/Idriver';
//import {IRace} from '../../../../App-F1/src/app/clases/Irace';


@Component({
  tag: 'f1-table',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
private _arrayData: IDriver[];
@Prop() arrayData: IDriver[] | string;
  //races: IRace[]=[{name:"2", time:"0", pos:1},{name:"1",time:"0", pos:4},{name:"1",time:"0", pos:4}];

  @Watch('arrayData')
  arrayDataWatcher(newValue: IDriver[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }
  
  componentWillLoad() {
    this.arrayDataWatcher(this.arrayData);
  }


  render() {
    return <table class="styled-table">
      
    <thead>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Team</th>
        </tr>
    </thead>
    <tbody>
    
    { 
      this._arrayData.map((driver, pos)=>
      <tr>
      <td>{pos}</td>
      <td>{driver.name}</td>
      <td>{driver.team}</td>
  </tr>

      )}
       
       
    </tbody>
</table>;
  
  }
}
