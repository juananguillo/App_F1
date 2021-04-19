import { r as registerInstance, h } from './index-9b7e9799.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("table", { class: "styled-table" }, h("thead", null, h("tr", null, h("th", null, "Rank"), h("th", null, "Name"), h("th", null, "Team"))), h("tbody", null, h("tr", null, h("td", null, "1"), h("td", null, "Miki"), h("td", null, "Everis")), h("tr", null, h("td", null, "1"), h("td", null, "Miki"), h("td", null, "Everis"))));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
