import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-races',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  

  
  render() {
   return <div class="dropdown">
  <button class="dropbtn">Select Race</button>
  <div class="dropdown-content">
    <slot name="buttonraces" />
  </div>
</div>;
  }
}
