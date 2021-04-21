import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-races',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  

  
  render() {
   return <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>;
  }
}
