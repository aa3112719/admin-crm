(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f89"],{"34dg":function(t,e,i){"use strict";i.r(e);var a=i("MT78"),n=i.n(a),l=i("KTTK"),s=i("B2Fc"),r=i("wd/R"),c=i.n(r),o={name:"task-complete-statistics",components:{},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},loading:!1,tableHeight:300,dateSelect:"",typeSelect:1,structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",list:[],fieldList:[{field:"month",name:"时间"},{field:"receivables",name:"回款金额(元)"},{field:"achiement",name:"目标(元)"},{field:"rate",name:"完成率(%)"}],axisChart:null,axisOption:null}},computed:{},mounted:function(){this.dateSelect=c()(new Date).year().toString(),this.getDeptList(),this.initAxis()},methods:{getDeptList:function(){var t=this;this.loading=!0,Object(l.b)().then(function(e){t.deptList=e.data,t.loading=!1,e.data.length>0&&(t.structuresSelectValue=e.data[0].id,t.getUserList(),t.getAhievementDatalist())}).catch(function(){t.loading=!1})},structuresValueChange:function(t){this.userSelectValue="",this.userOptions=[],this.getUserList()},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(l.j)(e).then(function(e){t.userOptions=e.data}).catch(function(){})},getAhievementDatalist:function(){var t=this;this.loading=!0,Object(s.a)({year:this.dateSelect,status:this.typeSelect,structure_id:this.structuresSelectValue,user_id:this.userSelectValue}).then(function(e){for(var i=[],a=[],n=[],l=1;l<13;l++){var s=e.data[l];i.push(s.receivables),a.push(s.achiement),n.push(s.rate),t.list.push(s)}t.axisOption.series[0].data=i,t.axisOption.series[1].data=a,t.axisOption.series[2].data=n,t.axisChart.setOption(t.axisOption,!0),t.loading=!1}).catch(function(){t.loading=!1})},handleClick:function(t){"search"===t&&this.getAhievementDatalist()},initAxis:function(){var t=n.a.init(document.getElementById("axismain")),e={color:["#6ca2ff","#6ac9d7","#ff7474"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["回款金额","目标","完成率"],bottom:"0px",itemWidth:14},grid:{top:"5px",left:"20px",right:"20px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"合同金额",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value} 元"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}},{type:"value",name:"完成率",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},position:"right",axisLabel:{color:"#BDBDBD",formatter:"{value} %"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{name:"回款金额",type:"bar",yAxisIndex:0,data:[]},{name:"目标",type:"bar",yAxisIndex:0,data:[]},{name:"完成率",type:"line",yAxisIndex:1,data:[]}]};t.setOption(e,!0),this.axisOption=e,this.axisChart=t}}},u=(i("BatI"),i("KHd+")),d=Object(u.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container",attrs:{direction:"column",align:"stretch"}},[i("div",{staticClass:"handle-bar"},[i("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":t.pickerOptions,placeholder:"选择年"},model:{value:t.dateSelect,callback:function(e){t.dateSelect=e},expression:"dateSelect"}}),t._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.typeSelect,callback:function(e){t.typeSelect=e},expression:"typeSelect"}},t._l([{label:"合同金额",value:1},{label:"回款金额",value:2}],function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),i("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),i("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})),t._v(" "),i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.handleClick("search")}}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"scoller-content"},[i("div",{staticClass:"axis-content"},[i("div",{staticStyle:{width:"850px",height:"400px"},attrs:{id:"axismain"}})]),t._v(" "),i("div",{staticClass:"content"},[i("el-table",{attrs:{data:t.list,height:t.tableHeight,stripe:"","highlight-current-row":""}},t._l(t.fieldList,function(t,e){return i("el-table-column",{key:e,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:t.field,label:t.name}})}))],1)])])},[],!1,null,"b4b6e456",null);d.options.__file="TaskCompleteStatistics.vue";e.default=d.exports},"96d8":function(t,e,i){},B2Fc:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"d",function(){return l}),i.d(e,"f",function(){return s}),i.d(e,"e",function(){return r}),i.d(e,"c",function(){return c}),i.d(e,"b",function(){return o});var a=i("t3Un");function n(t){return Object(a.a)({url:"bi/achievement/statistics",method:"post",data:t})}function l(t){return Object(a.a)({url:"bi/product/statistics",method:"post",data:t})}function s(t){return Object(a.a)({url:"bi/receivables/statistics",method:"post",data:t})}function r(t){return Object(a.a)({url:"bi/receivables/statisticList",method:"post",data:t})}function c(t){return Object(a.a)({url:"bi/customer/statistics",method:"post",data:t})}function o(t){return Object(a.a)({url:"bi/business/funnel",method:"post",data:t})}},BatI:function(t,e,i){"use strict";var a=i("96d8");i.n(a).a}}]);