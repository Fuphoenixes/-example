(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508d8ad8"],{"5fb3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-page"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"文件名称"}},[a("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:"请输入文件名 (默认 excel-list)","prefix-icon":"el-icon-document"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"自适应列宽"}},[a("el-radio-group",{model:{value:e.form.autoWidth,callback:function(t){e.$set(e.form,"autoWidth",t)},expression:"form.autoWidth"}},[a("el-radio",{attrs:{label:!0,border:""}},[e._v("\n          True\n        ")]),e._v(" "),a("el-radio",{attrs:{label:!1,border:""}},[e._v("\n          False\n        ")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"文件类型"}},[a("el-select",{staticStyle:{width:"120px"},model:{value:e.form.bookType,callback:function(t){e.$set(e.form,"bookType",t)},expression:"form.bookType"}},[a("el-option",{attrs:{label:"xlsx",value:"xlsx"}}),e._v(" "),a("el-option",{attrs:{label:"csv",value:"csv"}}),e._v(" "),a("el-option",{attrs:{label:"txt",value:"txt"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:e.$loadingPlugin.handleDownload,type:"primary",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("\n        导出\n      ")]),e._v(" "),a("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[a("el-tag",{attrs:{type:"info"}},[e._v("文档")])],1)],1)],1),e._v(" "),a("lb-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$loadingPlugin.fetchData,expression:"$loadingPlugin.fetchData"},{name:"el-height-adaptive-table",rawName:"v-el-height-adaptive-table",value:{bottomOffset:20},expression:"{bottomOffset: 20}"}],attrs:{"element-loading-text":"加载中",column:e.tableData.column,data:e.tableData.data,border:"","highlight-current-row":""},on:{fetch:e.fetchData}})],1)},l=[],r=a("a08c"),i=a.n(r),o=a("ad8f"),s=a("ed08");function c(e,t,a,n,l,r,i){try{var o=e[r](i),s=o.value}catch(c){return void a(c)}o.done?t(s):Promise.resolve(s).then(n,l)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var r=e.apply(t,a);function i(e){c(r,n,l,i,o,"next",e)}function o(e){c(r,n,l,i,o,"throw",e)}i(void 0)}))}}var d={name:"ExportExcel",data:function(){this.$createElement;return{form:{filename:"",autoWidth:!0,bookType:"xlsx"},tableData:{column:[{type:"index",align:"center",label:"ID",width:60},{prop:"title",label:"Title"},{prop:"author",label:"Author",align:"center",width:110},{prop:"pageviews",label:"Pageviews",align:"center",width:110},{label:"Status",align:"center",width:110,className:"status-col",render:function(e,t){var a={published:"success",draft:"gray",deleted:"danger"};return e("el-tag",{attrs:{type:a[t.row.status]}},[t.row.status])}},{label:"Display_time",align:"center",width:200,render:function(e,t){return e("div",[e("i",{class:"el-icon-time"}),e("span",[t.row.display_time])])}}],data:[]}}},methods:{fetchData:function(){var e=u(i.a.mark((function e(){var t;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])({pageIndex:1,pageSize:20});case 2:t=e.sent,this.tableData.data=t.data.items;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDownload:function(){var e=u(i.a.mark((function e(){var t,n,l,r,o;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([a.e("chunk-8f45bb30"),a.e("chunk-4743cd66")]).then(a.bind(null,"4bf8"));case 2:t=e.sent,n=["Id","Title","Author","Readings","Date"],l=["id","title","author","pageviews","display_time"],r=this.tableData.data,o=this.formatJson(l,r),t.export_json_to_excel({header:n,data:o,filename:this.form.filename,autoWidth:this.form.autoWidth,bookType:this.form.bookType});case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(s["c"])(t[e]):t[e]}))}))}}},f=d,m=a("e90a"),p=Object(m["a"])(f,n,l,!1,null,null,null);t["default"]=p.exports},ad8f:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("b775");function l(e){return Object(n["a"])({url:"/vue-admin-template/table/list",method:"get",data:e})}}}]);