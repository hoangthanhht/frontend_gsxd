(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-450fa89c"],{"0576":function(t,e,a){},"0b4b":function(t,e,a){},"5d9c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"danh-sach-ho-so"},[a("div",{staticClass:"div-fillter"},[a("div",{staticClass:"btn-add-cv"},[a("router-link",{staticClass:"mb-2 add-cv icon-tvgs pt-3 pb-3",attrs:{to:"/themhoso",tag:"b-button"}},[a("b-icon",{attrs:{icon:"plus","aria-hidden":"true"}}),t._v(" Thêm ")],1)],1),a("div",{staticClass:"select-cbb"},[a("b-form-select",{attrs:{options:t.time_create},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Thời gian tạo hồ sơ --")])]},proxy:!0}]),model:{value:t.selectedTimeCreate,callback:function(e){t.selectedTimeCreate=e},expression:"selectedTimeCreate"}})],1),a("div",{staticClass:"select-cbb"},[a("b-form-select",{attrs:{options:t.priority_level},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Tình trạng hồ sơ --")])]},proxy:!0}]),model:{value:t.selectedPriorityLevel,callback:function(e){t.selectedPriorityLevel=e},expression:"selectedPriorityLevel"}})],1),a("div",{staticClass:"select-cbb"},[a("multiselect",{attrs:{placeholder:"Loại hồ sơ","custom-label":t.custom_label_persion,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.kindfile},model:{value:t.selectedKindFile,callback:function(e){t.selectedKindFile=e},expression:"selectedKindFile"}})],1),a("div",{staticClass:"search-congv"},[a("b-input-group",{staticClass:"mb-2 add-cv icon-tvgs cursor-pointer",attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",placeholder:"Search terms"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"},on:{click:t.handleSearch}})],1),a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"arrow-repeat"},on:{click:t.handleReset}})],1)],1)],1)]),t.search||t.selectedKindFile||t.selectedPriorityLevel?a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive table-striped"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n              \n            "},[t._m(0),0!==t.dataArr.length?a("tbody",[t._l(t.handleSearch(),(function(e,n){return[a("tr",{key:n,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.tenHoSo?e.tenHoSo:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.soLuong?e.soLuong:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.lanKiemTra?e.lanKiemTra:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==t.handleGetDate(t.handleSearch(),n)?t.handleGetDate(t.handleSearch(),n):"")+" ")])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[t._v(t._s(null!==e.ketQua?e.ketQua:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[t._v(t._s(null!==e.nguoiPheDuyet?e.nguoiPheDuyet:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[a("i",{staticClass:"\n                          menu-icon\n                          cursor-pointer\n                          flaticon2-edit\n                          text-white\n                          pl-2\n                          pr-2\n                          mr-5\n                          bg-green-400\n                        ",on:{click:function(e){t.handleEdit(t.handleSearch(),n)}}}),a("i",{staticClass:"\n                          menu-icon\n                          cursor-pointer\n                          flaticon2-rubbish-bin\n                          text-white\n                          pl-2\n                          pr-2\n                          bg-red-600\n                        ",on:{click:function(e){t.handleDelete(t.handleSearch(),n)}}})])])])]}))],2):t._e()])])])]):a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive table-striped"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n              \n            "},[t._m(1),0!==t.dataArr.length?a("tbody",[t._l(t.dataArrFile,(function(e,n){return[a("tr",{key:n,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.tenHoSo?e.tenHoSo:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.soLuong?e.soLuong:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.lanKiemTra?e.lanKiemTra:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==t.handleGetDate(t.dataArrFile,n)?t.handleGetDate(t.dataArrFile,n):"")+" ")])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[t._v(t._s(null!==e.ketQua?e.ketQua:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[t._v(t._s(null!==e.nguoiPheDuyet?e.nguoiPheDuyet:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[a("i",{staticClass:"\n                          menu-icon\n                          cursor-pointer\n                          flaticon2-edit\n                          text-white\n                          pl-2\n                          pr-2\n                          mr-5\n                          bg-green-400\n                        ",on:{click:function(e){return t.handleEdit(t.dataArrFile,n)}}}),a("i",{staticClass:"\n                          menu-icon\n                          cursor-pointer\n                          flaticon2-rubbish-bin\n                          text-white\n                          pl-2\n                          pr-2\n                          bg-red-600\n                        ",on:{click:function(e){return t.handleDelete(t.dataArrFile,n)}}})])])])]}))],2):t._e()])])])]),a("b-pagination",{attrs:{align:"right",pills:"",perPage:"20","total-rows":t.rows,size:"lg"},on:{"page-click":function(e){return t.dataArr(t.currentPage)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("Tên hồ sơ")]),a("th",[t._v("Số lượng")]),a("th",[t._v("Lần kiểm tra")]),a("th",[t._v("Ngày")]),a("th",[t._v("Kết quả")]),a("th",[t._v("Người kiểm tra")]),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("Tên hồ sơ")]),a("th",[t._v("Số lượng")]),a("th",[t._v("Lần kiểm tra")]),a("th",[t._v("Ngày")]),a("th",[t._v("Kết quả")]),a("th",[t._v("Người kiểm tra")]),a("th")])])}],s=a("5530"),i=(a("ac1f"),a("841c"),a("4de4"),a("caad"),a("2532"),a("1276"),a("8e5f")),r=a.n(i),o=a("2f62"),c=a("25a6"),d={components:{Multiselect:r.a},data:function(){return{search:"",currentPage:1,rows:100,dataArrFile:[],dataArrAllFile:[],selectedKindFile:null,kindfile:[{id:"1",text:"Hồ sơ nghiệm thu công việc"},{id:"2",text:"Hồ sơ nghiệm thu vật liệu"},{id:"3",text:"Hồ sơ nghiệm thu thiết bị"}],selectedPriorityLevel:null,priority_level:[{value:"Đạt",text:"Đạt"},{value:"Không đạt",text:"Không đạt"}],selectedTimeCreate:null,time_create:[{value:"1",text:"Tất cả"},{value:"2",text:"3 ngày"},{value:"3",text:"7 ngày"},{value:"4",text:"Tự chọn"}]}},created:function(){var t=this;this["storeqlda/getAllFile"]().then((function(e){t.dataArrAllFile=e.data}))},mounted:function(){this.$store.dispatch(c["a"],[{title:"Danh sách hồ sơ"}]),this.dataArr(this.currentPage)},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["storeqlda/getListFileHasPaging","storeqlda/getListDataUser","storeqlda/getAllFile","storeqlda/destroyFileWithId"])),{},{handleReset:function(){this.search="",this.selectedTimeCreate=null,this.selectedKindFile=null,this.selectedPriorityLevel=null},handleSearch:function(){var t=this;if(this.search){var e=this.dataArrAllFile.filter((function(e){var a=!1;return e.tenHoSo&&0==a&&(a=e.tenHoSo.toLowerCase().includes(t.search.toLowerCase())),e.loaiHoSo&&0==a&&(a=e.loaiHoSo.toLowerCase().includes(t.search.toLowerCase())),e.ketQua&&0==a&&(a=e.ketQua.toLowerCase().includes(t.search.toLowerCase())),e.lyDoKhongDat&&0==a&&(a=e.lyDoKhongDat.toLowerCase().includes(t.search.toLowerCase())),e.lanKiemTra&&0==a&&(a=e.lanKiemTra.toLowerCase().includes(t.search.toLowerCase())),a}));return e}if(this.selectedPriorityLevel||this.selectedKindFile){var a=this.dataArrAllFile.filter((function(e){return t.selectedKindFile&&JSON.stringify(t.selectedKindFile)==e.loaiHoSo||t.selectedPriorityLevel&&t.selectedPriorityLevel==e.ketQua?e:void 0}));return a}},handleGetDate:function(t,e){var a="",n=[];if(t[e].ngayNhan&&t[e].ngayTra){n.push(t[e].ngayNhan),n.push(t[e].ngayTra);var l=n[0].split("-"),s=n[1].split("-");a="Nhận : "+l[2]+"/"+l[1]+"/"+l[0]+",Trả: "+s[2]+"/"+s[1]+"/"+s[0]}if(t[e].ngayNhan&&!t[e].ngayTra){n.push(t[e].ngayNhan);var i=n[0].split("-");a="Nhận : "+i[2]+"/"+i[1]+"/"+i[0]+",Trả: "}return a},handleDelete:function(t,e){var a=this;confirm("Bạn có chắc chắn muốn xóa dữ liệu này không?")&&this["storeqlda/destroyFileWithId"](t[e].id).then((function(t){a.search?(a["storeqlda/getAllFile"]().then((function(t){a.dataArrAllFile=t.data})),alert(t.data.msg)):(a.dataArr(a.currentPage),alert(t.data.msg))}))},handleEdit:function(t,e){var a=t[e].id,n=t[e].kyHieuHoSo;"hsnt"===n&&this.$router.push("/themhoso/".concat(a)),"hstk"===n&&this.$router.push("/hosotke/".concat(a)),"hsk"===n&&this.$router.push("/hosokhac/".concat(a))},custom_label_persion:function(t){var e=t.text;return"".concat(e)},dataArr:function(t){var e=this,a={page:t};this["storeqlda/getListFileHasPaging"](a).then((function(t){e.dataArrFile=t.data.data,e.pagination=t.data,e.rows=t.data.total}))}})},u=d,h=(a("60bc"),a("ea42"),a("2877")),b=Object(h["a"])(u,n,l,!1,null,"358ab928",null);e["default"]=b.exports},"60bc":function(t,e,a){"use strict";a("0b4b")},ea42:function(t,e,a){"use strict";a("0576")}}]);
//# sourceMappingURL=chunk-450fa89c.46fc9147.js.map