(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e24045"],{9328:function(t,e,a){},ad1b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom card-stretch gutter-b"},[t._m(0),a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[t._m(1),0!==t.dataArrFile.length?a("tbody",[t._l(t.dataArrFile,(function(e,n){return[a("tr",{key:n,staticClass:"border-b row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold"},[t._v(t._s(n))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[t._v(t._s(n+1))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.file?e.file:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.size?e.size:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.date?e.date:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[a("i",{staticClass:"menu-icon cursor-pointer flaticon2-download \n                      text-white pl-2 pr-2 mr-5 bg-green-400",on:{click:function(e){return t.handleDownLoad(n)}}}),a("i",{staticClass:"menu-icon cursor-pointer flaticon2-rubbish-bin\n                      text-white pl-2 pr-2 bg-red-600",on:{click:function(e){return t.handleDelete(n)}}})])])])]}))],2):t._e()])])])]),a("b-pagination",{attrs:{align:"right",pills:"",perPage:"20","total-rows":t.rows,size:"lg"},on:{"page-click":function(e){return t.dataArr(t.currentPage)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-10 pb-5 pt-5"},[a("i",{staticClass:"menu-icon flaticon2-time pr-3 text-green-400"}),t._v(" Sao lưu dữ liệu ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("Stt")]),a("th",[t._v("tên file")]),a("th",[t._v("kích thước")]),a("th",[t._v("ngày tạo")]),a("th",[t._v("hành động")])])])}],r=a("5530"),s=a("2f62"),l={name:"gia_vat_tu",components:{},data:function(){return{rows:100,currentPage:1,dataArrFile:[]}},created:function(){},mounted:function(){this.dataArr(this.currentPage)},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["d"])({stringSearch:function(t){return t.storeqlda.stringSearch}})),Object(s["c"])(["currentUserPersonalInfo","storeqlda/currentUser"])),{},{dataArrFileSearch:function(){return this["storeqlda/arrBaoGiaSearch"]}}),watch:{},methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])(["storeqlda/getListFileBKHasPaging","storeqlda/deleteFile","storeqlda/downFile"])),{},{dataArr:function(t){var e=this;this["storeqlda/getListFileBKHasPaging"](t).then((function(t){e.dataArrFile=t.data.data,e.pagination=t.data,e.rows=t.data.total}))},handleChange:function(t){this.selectedFile=t.target.files[0]},getParentSelect:function(t,e){while(t.parentElement){var a=t.parentElement;if(a.matches(e))return a;t=a}},handleDownLoad:function(t){window.location.href="http://pippip.gxd.vn/api/downLoadFile/".concat(this.dataArrFile[t].file)},handleDelete:function(t){var e=this;this["storeqlda/deleteFile"](this.dataArrFile[t].file).then((function(t){alert(t.data.msg),e.dataArr(e.currentPage)}))}})},c=l,o=(a("f369"),a("2877")),d=Object(o["a"])(c,n,i,!1,null,"5784664b",null);e["default"]=d.exports},f369:function(t,e,a){"use strict";a("9328")}}]);
//# sourceMappingURL=chunk-76e24045.d722f5fd.js.map