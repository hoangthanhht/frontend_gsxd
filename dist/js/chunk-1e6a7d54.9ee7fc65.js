(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6a7d54"],{"0b4b":function(t,e,a){},"0f0f":function(t,e,a){},"3ca7":function(t,e,a){},"402e":function(t,e,a){"use strict";a("0f0f")},"60bc":function(t,e,a){"use strict";a("0b4b")},7683:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"muchoso"},[a("div",{staticClass:"btn-muchs"},[a("router-link",{staticClass:"add-cv",attrs:{to:"/themhoso",tag:"b-button"}},[t._v("Hồ Sơ Nghiệm Thu")])],1),a("div",{staticClass:"btn-muchs"},[a("router-link",{staticClass:"add-cv",attrs:{to:"/hosotke",tag:"b-button"}},[t._v("Hồ Sơ Thiết Kế")])],1),a("div",{staticClass:"btn-muchs"},[a("router-link",{staticClass:"add-cv",attrs:{to:"/hosokhac",tag:"b-button"}},[t._v("Loại Hồ Sơ Khác")])],1)])},i=[],n={data:function(){return{isActive:!1}},methods:{handleClick:function(){this.$emit("handleClick")}}},c=n,r=(a("b721"),a("2877")),o=Object(r["a"])(c,s,i,!1,null,"f1fbb12c",null);e["a"]=o.exports},b721:function(t,e,a){"use strict";a("3ca7")},d725:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"them-hs-ngthu"},[a("div",[a("CompThemHs",{attrs:{isActive:t.isActive},on:{handleClick:t.handleClick}})],1),a("div",{staticClass:"body-hstk"},[a("div",{staticClass:"form-add-hs-nghthu"},[a("h4",[t._v("Cập nhật thông tin Hồ sơ thiết kế")]),a("div",{staticClass:"hs-gr1"},[a("div",{staticClass:"gr-ten-hs"},[a("p",[t._v("Tên hồ sơ thiết kế & thay đổi thiết kế:")]),a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập tên công việc",required:""},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}})],1),a("div",{staticClass:"gr-sl"},[a("p",[t._v("Ngày nhận:")]),a("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReceive,callback:function(e){t.timeReceive=e},expression:"timeReceive"}})],1)]),a("div",{staticClass:"select-for-hs"},[a("p",{staticClass:"pt-2"},[t._v("Chọn dự án:")]),a("div",[a("multiselect",{attrs:{"custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.project},model:{value:t.selectedProject,callback:function(e){t.selectedProject=e},expression:"selectedProject"}})],1)]),a("div",{staticClass:"hs-gr2"},[a("p",{staticClass:"pt-2"},[t._v("Nội dung tk/ thay đổi tk:")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Lưu ý",rows:"3","max-rows":"6"},model:{value:t.contentChange,callback:function(e){t.contentChange=e},expression:"contentChange"}})],1),a("div",{staticClass:"hs-gr3"},[a("p",{staticClass:"pt-2"},[t._v("Nguyên nhân thay đổi:")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Lưu ý",rows:"3","max-rows":"6"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),a("div",{staticClass:"hs-gr4"},[a("p",{staticClass:"pt-2"},[t._v("Người phê duyệt:")]),a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập tên người phê duyệt",required:""},model:{value:t.approver,callback:function(e){t.approver=e},expression:"approver"}}),a("p",{staticClass:"pt-2"},[t._v("Nhận xét của TVGS về Hồ sơ thiết kế và thay đổi TK")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Lưu ý",rows:"3","max-rows":"6"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),a("div",{staticClass:"hs-gr5"},[a("p",{staticClass:"pt-2"},[t._v("File và tài liệu liên quan")]),a("b-form-file",{staticClass:"z-0",attrs:{id:"file-small",size:"sm"}})],1)]),a("div",{staticClass:"hstk_note"},[a("div",{staticClass:"add-gr41"},[a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"First",active:""}},[a("p",[t._v("I'm the first tab")])]),a("b-tab",{attrs:{title:"Second"}},[a("p",[t._v("I'm the second tab")])])],1)],1),t._m(0)])]),a("div",{staticClass:"hs-gr6"},[a("div",{staticClass:"add-gr51"},[a("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"}},[a("b-icon",{attrs:{icon:"x-octagon-fill","aria-hidden":"true"}}),t._v(" Bỏ qua ")],1)],1),a("div",{staticClass:"add-gr51 add-gr52"},[a("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"},on:{click:t.handleSave}},[a("b-icon",{attrs:{icon:"check2","aria-hidden":"true"}}),t._v(" Cập nhật ")],1)],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-gr41"},[a("p",[t._v(" Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú. Nội dung ghi chú sẽ được hiển thị ở đây ")])])}],n=a("5530"),c=(a("ac1f"),a("1276"),a("7683")),r=a("2f62"),o=a("8e5f"),l=a.n(o),h={data:function(){return{comment:"",approver:"",reason:"",contentChange:"",timeReceive:"",fileName:"",selectedProject:null,project:[],isActive:!1}},components:{CompThemHs:c["a"],Multiselect:l.a},created:function(){var t=this;this["storeqlda/getListProjectName"]().then((function(e){var a=e.data;for(var s in a){var i={id:a[s].id,text:a[s].tenDuAn};t.project.push(i)}}))},computed:Object(n["a"])({},Object(r["c"])(["storeqlda/getListDataUserGTer","currentUserPersonalInfo","storeqlda/currentUser"])),methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["storeqlda/ActionCreateFile","storeqlda/getListDataUser","storeqlda/getListProjectName"])),{},{custom_label:function(t){var e=t.text;return"".concat(e)},handleSave:function(){var t="";if(this.timeReceive){var e=this.timeReceive.split("-");t=e[2]+"/"+e[1]+"/"+e[0]}var a={duAn:this.selectedProject,loaiHoSo:"hồ sơ thiết kế",tenHoSo:this.fileName,soLuong:null,ngayNhan:t,ngayTra:null,lanKiemTra:null,ketQua:null,lyDoKhongDat:null,noiDungThayDoiTk:this.contentChange,nguyenNhanThayDoiTk:this.reason,nguoiPheDuyet:this.approver,yKienTVGS:this.comment};this["storeqlda/ActionCreateFile"](a).then((function(t){alert(t.data)}))},handleClick:function(){this.isActive=!this.isActive}})},d=h,u=(a("60bc"),a("402e"),a("2877")),v=Object(u["a"])(d,s,i,!1,null,"6146a3ba",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-1e6a7d54.9ee7fc65.js.map