import{r as t,h as e}from"./p-b009c91b.js";const a=class{constructor(e){t(this,e)}render(){return e("div",{class:"tablacont"},e("table",{class:"styled-table"},e("thead",null,e("tr",null,e("slot",{name:"thead"}))),e("tbody",null,e("slot",{name:"tbody"}))))}};a.style='table thead{background-color:#06b70b;color:white;margin-top:100px}table thead tr th{width:150px}table{margin-top:20px;margin-right:auto;margin-left:auto;border-collapse:collapse;width:70%}::slotted(tr:hover){color:green;transform:translateX(10%)}[name="thead"]::slotted(th:nth-child(1)){border-top-left-radius:150px;text-align:center}[name="thead"]::slotted(th:nth-child(3)){border-bottom-right-radius:150px}[name="tbody"]::slotted(tr:nth-child(even)){background-color:#dddddd}@media (max-width:600px){.priority{display:none}table{width:80%}}';export{a as f1_table}