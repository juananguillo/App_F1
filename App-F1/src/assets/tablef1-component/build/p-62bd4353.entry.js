import{r as t,h as r}from"./p-6e26a03c.js";const a=class{constructor(r){t(this,r)}arrayDataWatcher(t){this._arrayData="string"==typeof t?JSON.parse(t):t}componentWillLoad(){this.arrayDataWatcher(this.arrayData)}render(){return r("table",{class:"styled-table"},r("thead",null,r("tr",null,r("th",null,"Rank"),r("th",null,"Name"),r("th",null,"Team"))),r("tbody",null,this._arrayData.map(((t,a)=>r("tr",null,r("td",null,a),r("td",null,t.name),r("td",null,t.team))))))}static get watchers(){return{arrayData:["arrayDataWatcher"]}}};a.style=":host{display:block}table thead tr{background-color:#06b70b;color:white;margin-top:100px}table thead tr th{width:150px;text-align:center}table{margin-top:20px;margin-right:auto;margin-left:auto;width:50%;border-collapse:separate}table tbody :hover{color:green;transform:translateX(2%)}td{border:1px solid #dddddd;text-align:center;padding:8px}tr:nth-child(even){background-color:#dddddd}tr:first-child th:first-child{border-top-left-radius:150px}tr:first-child th:last-child{border-bottom-right-radius:150px}.container .card-driver{margin-left:80px;margin-top:20px;max-width:11rem;border-radius:23px 26px 23px 23px;border-color:#06b70b;height:440px}.card .card-img-top{width:90px;height:95px;margin-top:10px;margin-left:40px;border-radius:10px}.header-driver{background-color:#06b70b;border-radius:20px 19px 0px 0px;text-align:center;color:white}.driver-body{color:#06b70b;text-align:center}";export{a as f1_table}