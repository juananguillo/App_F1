import{r,h as t}from"./p-9a21a036.js";const e=class{constructor(t){r(this,t)}render(){let r="";switch(this.global){case 1:r="🥇";break;case 2:r="🥈";case 3:r="🥉";default:r=this.global}return t("div",{class:"container"},t("div",{class:"row"},t("div",{class:"col-6"},t("div",{class:"card"},t("div",{class:"header-driver"},t("h4",null,"Driver Card")),t("div",{class:"driver-body"},t("img",{class:"imgdriver",src:this.picture}),t("p",null,"Name"),t("p",{class:"content"},this.name),t("p",null,"Age"),t("p",{class:"content"},this.age),t("p",null,"Team"),t("p",{class:"content"},this.team),t("p",null,"Global Ranking"),t("p",{class:"contentpos"},r)),t("div",{class:"col-6"},t("div",{class:"tablacont"},t("table",{class:"styled-table"},t("thead",null,t("tr",null,t("th",{colSpan:2},"Race"),t("th",null,"Position"),t("th",{class:"priority"},"Time"))),t("tbody",null,t("slot",{name:"drivers"})))),";")))))}};e.style=":host{display:block}.card{max-width:11rem;border-radius:23px 26px 23px 23px;height:600px;width:200px}.header-driver{margin-bottom:0px;background-color:#06b70b;border-radius:20px 19px 0px 0px;text-align:center;color:white;height:30px}.header-driver h4{padding-top:5%}.imgdriver{margin-top:10px}.driver-body{color:#06b70b;text-align:center;border:1px solid  #06b70b;border-bottom-left-radius:25px;border-bottom-right-radius:25px;line-height:8pt}.content{color:gray;font-size:small}.contentpos{color:black;font-size:large}@media (max-width:700px){.container{max-width:20rem;margin:auto}.header-driver h4{padding-top:3%}}";export{e as driver_card}