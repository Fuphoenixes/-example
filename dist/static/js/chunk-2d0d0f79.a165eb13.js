(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f79"],{"69dd":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"app-page"},[t("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:e.filterText,callback:function(l){e.filterText=l},expression:"filterText"}}),e._v(" "),t("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""}}),e._v(" "),t("el-button",{on:{click:function(l){return e.$router.push("/example/tree/aa")}}},[e._v("下一页")])],1)},r=[],i={name:"example-tree",data:function(){return{filterText:"",data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(e){this.$refs.tree2.filter(e)}},created:function(){console.log(this.$getCachedPageByName("example-table"))},methods:{filterNode:function(e,l){return!e||-1!==l.label.indexOf(e)}}},n=i,d=t("e90a"),o=Object(d["a"])(n,a,r,!1,null,null,null);l["default"]=o.exports}}]);