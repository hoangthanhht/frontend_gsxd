(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd80a0c"],{"0b4b":function(t,e,s){},"0d35":function(t,e,s){"use strict";s("f4b5")},"3aa5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"them-hs-ngthu"},[s("div",[s("CompThemHs",{attrs:{isActive:t.isActive},on:{handleClick:t.handleClick}})],1),s("div",{staticClass:"body-hstk"},[s("div",{staticClass:"form-add-hs-nghthu"},[s("h4",[t._v("Cập nhật thông tin Hồ sơ nghiệm thu")]),s("div",{staticClass:"select-for-hs"},[s("p",[t._v("Loại Hồ sơ:")]),s("div",{staticClass:"theodoi-thicong"},[s("multiselect",{attrs:{"custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.kindfile},model:{value:t.selectedKindFile,callback:function(e){t.selectedKindFile=e},expression:"selectedKindFile"}})],1),s("p",{staticClass:"pt-2"},[t._v("Chọn dự án:")]),s("div",{staticClass:"theodoi-thicong"},[s("multiselect",{attrs:{"custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.project},model:{value:t.selectedProject,callback:function(e){t.selectedProject=e},expression:"selectedProject"}})],1)]),s("div",{staticClass:"hs-gr1"},[s("div",{staticClass:"gr-ten-hs"},[s("p",{staticClass:"pt-2"},[t._v("Tên Hồ sơ")]),s("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Nhập tên công việc",required:""},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}})],1),s("div",{staticClass:"gr-sl"},[s("p",{staticClass:"pt-2"},[t._v("Số lượng:")]),s("b-form-input",{staticStyle:{width:"100%",height:"34px"},attrs:{type:"number",id:"quantity",name:"quantity",min:"-9999",max:"9999"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)]),s("div",{staticClass:"hs-gr2"},[s("div",{staticClass:"gr-nhan"},[s("p",{staticClass:"pt-2"},[t._v("Ngày nhận:")]),s("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReceive,callback:function(e){t.timeReceive=e},expression:"timeReceive"}})],1),s("div",{staticClass:"gr-tra"},[s("p",{staticClass:"pt-2"},[t._v("Ngày trả:")]),s("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReturn,callback:function(e){t.timeReturn=e},expression:"timeReturn"}})],1)]),s("div",{staticClass:"hs-gr3"},[s("div",{staticClass:"gr-ktra"},[s("p",{staticClass:"pt-2"},[t._v("Lần kiểm tra:")]),s("b-form-input",{staticStyle:{width:"100%",height:"38px"},attrs:{type:"number",id:"quantity",name:"quantity",min:"-9999",max:"9999"},model:{value:t.timeTest,callback:function(e){t.timeTest=e},expression:"timeTest"}})],1),s("div",{staticClass:"gr-kqua"},[s("p",{staticClass:"pt-2"},[t._v("Kết quả kiểm tra:")]),s("b-form-select",{attrs:{options:t.result},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Kết quả --")])]},proxy:!0}]),model:{value:t.selectedResult,callback:function(e){t.selectedResult=e},expression:"selectedResult"}})],1)]),s("div",{staticClass:"hs-gr4"},[s("p",{staticClass:"pt-2"},[t._v("Lý do không đạt:")]),s("b-form-textarea",{attrs:{id:"textarea",placeholder:"Lưu ý",rows:"3","max-rows":"6"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),s("div",{staticClass:"hs-gr5"},[s("p",{staticClass:"pt-2"},[t._v("File và tài liệu liên quan")]),s("b-form-file",{staticClass:"z-0",attrs:{id:"file-small",size:"sm"}})],1)]),s("div",{staticClass:"hstk_note"},[s("div",{staticClass:"add-gr41"},[s("b-tabs",{attrs:{"content-class":"mt-3"}},[s("b-tab",{attrs:{title:"First",active:""}},[s("p",[t._v("I'm the first tab")])]),s("b-tab",{attrs:{title:"Second"}},[s("p",[t._v("I'm the second tab")])])],1)],1),t._m(0)])]),s("div",{staticClass:"hs-gr6"},[s("div",{staticClass:"add-gr51"},[s("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"}},[s("b-icon",{attrs:{icon:"x-octagon-fill","aria-hidden":"true"}}),t._v(" Bỏ qua ")],1)],1),s("div",{staticClass:"add-gr51 add-gr52"},[s("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"},on:{click:t.handleSave}},[s("b-icon",{attrs:{icon:"check2","aria-hidden":"true"}}),t._v(" Cập nhật ")],1)],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-gr41"},[s("p",[t._v(" Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú. Nội dung ghi chú sẽ được hiển thị ở đây ")])])}],n=s("5530"),l=(s("ac1f"),s("1276"),s("8e5f")),c=s.n(l),r=s("2f62"),o=s("7683"),u={data:function(){return{fileName:"",quantity:0,timeReceive:"",timeReturn:"",timeTest:"",reason:"",selectedResult:null,result:[{value:"Đạt",text:"Đạt"},{value:"Không đạt",text:"Không đạt"}],selectedKindFile:null,kindfile:[{id:"1",text:"Hồ sơ nghiệm thu công việc"},{id:"2",text:"Hồ sơ nghiệm thu vật liệu"},{id:"2",text:"Hồ sơ nghiệm thu thiết bị"}],selectedProject:null,project:[],isActive:!1}},components:{CompThemHs:o["a"],Multiselect:c.a},computed:Object(n["a"])({},Object(r["c"])(["storeqlda/getListDataUserGTer","currentUserPersonalInfo","storeqlda/currentUser"])),created:function(){var t=this;this["storeqlda/getListProjectName"]().then((function(e){var s=e.data;for(var i in s){var a={id:s[i].id,text:s[i].tenDuAn};t.project.push(a)}}))},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["storeqlda/ActionCreateFile","storeqlda/getListDataUser","storeqlda/getListProjectName"])),{},{custom_label:function(t){var e=t.text;return"".concat(e)},handleSave:function(){var t="",e="";if(this.timeReceive&&this.timeReturn){var s=this.timeReceive.split("-"),i=this.timeReturn.split("-");t=s[2]+"/"+s[1]+"/"+s[0],e=i[2]+"/"+i[1]+"/"+i[0]}var a={duAn:this.selectedProject,loaiHoSo:this.selectedKindFile.text,tenHoSo:this.fileName,soLuong:this.quantity,ngayNhan:t,ngayTra:e,lanKiemTra:this.timeTest,ketQua:this.selectedResult,lyDoKhongDat:this.reason,noiDungThayDoiTk:null,nguyenNhanThayDoiTk:null,nguoiPheDuyet:null,yKienTVGS:null};this["storeqlda/ActionCreateFile"](a).then((function(t){alert(t.data)}))},handleClick:function(){this.isActive=!this.isActive}})},d=u,h=(s("60bc"),s("0d35"),s("2877")),m=Object(h["a"])(d,i,a,!1,null,"3b683d85",null);e["default"]=m.exports},"3ca7":function(t,e,s){},"60bc":function(t,e,s){"use strict";s("0b4b")},7683:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"muchoso"},[s("div",{staticClass:"btn-muchs"},[s("router-link",{staticClass:"add-cv",attrs:{to:"/themhoso",tag:"b-button"}},[t._v("Hồ Sơ Nghiệm Thu")])],1),s("div",{staticClass:"btn-muchs"},[s("router-link",{staticClass:"add-cv",attrs:{to:"/hosotke",tag:"b-button"}},[t._v("Hồ Sơ Thiết Kế")])],1),s("div",{staticClass:"btn-muchs"},[s("router-link",{staticClass:"add-cv",attrs:{to:"/hosokhac",tag:"b-button"}},[t._v("Loại Hồ Sơ Khác")])],1)])},a=[],n={data:function(){return{isActive:!1}},methods:{handleClick:function(){this.$emit("handleClick")}}},l=n,c=(s("b721"),s("2877")),r=Object(c["a"])(l,i,a,!1,null,"f1fbb12c",null);e["a"]=r.exports},b721:function(t,e,s){"use strict";s("3ca7")},f4b5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2cd80a0c.5690c9d2.js.map