(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c7b8e8a"],{"0b4b":function(t,e,i){},"2ba5":function(t,e,i){},"3ca7":function(t,e,i){},"60bc":function(t,e,i){"use strict";i("0b4b")},7683:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"muchoso"},[i("div",{staticClass:"btn-muchs"},[i("router-link",{staticClass:"add-cv",attrs:{to:"/themhoso",tag:"b-button"}},[t._v("Hồ Sơ Nghiệm Thu")])],1),i("div",{staticClass:"btn-muchs"},[i("router-link",{staticClass:"add-cv",attrs:{to:"/hosotke",tag:"b-button"}},[t._v("Hồ Sơ Thiết Kế")])],1),i("div",{staticClass:"btn-muchs"},[i("router-link",{staticClass:"add-cv",attrs:{to:"/hosokhac",tag:"b-button"}},[t._v("Loại Hồ Sơ Khác")])],1)])},a=[],n={data:function(){return{isActive:!1}},methods:{handleClick:function(){this.$emit("handleClick")}}},l=n,c=(i("b721"),i("2877")),o=Object(c["a"])(l,s,a,!1,null,"f1fbb12c",null);e["a"]=o.exports},"7a8c":function(t,e,i){"use strict";i("2ba5")},"894a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"them-hs-ngthu"},[i("div",[i("CompThemHs",{staticClass:"pb-6",attrs:{isActive:t.isActive},on:{handleClick:t.handleClick}})],1),i("div",{staticClass:"form-add-hs-nghthu"},[i("h4",[t._v("Cập nhật thông tin Hồ sơ nghiệm thu")]),i("div",{staticClass:"select-for-hs"},[i("p",[t._v("Loại Hồ sơ:")]),i("div",{staticClass:"theodoi-thicong"},[i("multiselect",{attrs:{"custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.kindfile},model:{value:t.selectedKindFile,callback:function(e){t.selectedKindFile=e},expression:"selectedKindFile"}})],1),i("p",{staticClass:"pt-2"},[t._v("Chọn dự án:")]),i("div",{staticClass:"theodoi-thicong"},[i("multiselect",{attrs:{multiple:"","custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.project},model:{value:t.selectedProject,callback:function(e){t.selectedProject=e},expression:"selectedProject"}})],1),i("div",{staticClass:"hs-gr1"},[i("div",{staticClass:"gr-ten-hs"},[i("p",{staticClass:"pt-2"},[t._v("Tên Hồ sơ")]),i("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập tên hồ sơ",required:""},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}})],1),i("div",{staticClass:"gr-sl"},[i("p",{staticClass:"pt-2"},[t._v("Số lượng:")]),i("b-form-input",{staticStyle:{width:"100%",height:"34px"},attrs:{type:"number",id:"quantity",name:"quantity",min:"-9999",max:"9999"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)]),i("div",{staticClass:"hs-gr2"},[i("div",{staticClass:"gr-nhan"},[i("p",{staticClass:"pt-2"},[t._v("Ngày nhận:")]),i("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReceive,callback:function(e){t.timeReceive=e},expression:"timeReceive"}})],1),i("div",{staticClass:"gr-tra"},[i("p",{staticClass:"pt-2"},[t._v("Ngày trả:")]),i("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReturn,callback:function(e){t.timeReturn=e},expression:"timeReturn"}})],1)]),i("div",{staticClass:"hs-gr3"},[i("div",{staticClass:"gr-ktra"},[i("p",{staticClass:"pt-2"},[t._v("Lần kiểm tra:")]),i("b-form-input",{staticStyle:{width:"100%",height:"38px"},attrs:{type:"number",id:"quantity",name:"quantity",min:"-9999",max:"9999"},model:{value:t.timeTest,callback:function(e){t.timeTest=e},expression:"timeTest"}})],1),i("div",{staticClass:"gr-kqua"},[i("p",{staticClass:"pt-2"},[t._v("Kết quả kiểm tra:")]),i("b-form-select",{attrs:{options:t.result},scopedSlots:t._u([{key:"first",fn:function(){return[i("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Kết quả --")])]},proxy:!0}]),model:{value:t.selectedResult,callback:function(e){t.selectedResult=e},expression:"selectedResult"}})],1)]),i("div",{staticClass:"hs-gr4"},[i("p",{staticClass:"pt-2"},[t._v("Lý do không đạt:")]),i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Lưu ý",rows:"3","max-rows":"6"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),i("div",{staticClass:"hs-gr5"},[i("p",{staticClass:"pt-2"},[t._v("File và tài liệu liên quan")]),i("b-form-file",{staticClass:"z-0",attrs:{id:"file-small",size:"sm"}})],1)])]),i("div",{staticClass:"hs-gr6"},[i("div",{staticClass:"add-gr51"},[i("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"}},[i("b-icon",{attrs:{icon:"x-octagon-fill","aria-hidden":"true"}}),t._v(" Bỏ qua ")],1)],1),t.idCurrentFile?i("div",{staticClass:"add-gr51 add-gr52"},[i("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"},on:{click:t.handleUpdate}},[i("b-icon",{attrs:{icon:"check2","aria-hidden":"true"}}),t._v(" Cập nhật ")],1)],1):i("div",{staticClass:"add-gr51 add-gr52"},[i("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"},on:{click:t.handleSave}},[i("b-icon",{attrs:{icon:"check2","aria-hidden":"true"}}),t._v(" Tạo hồ sơ ")],1)],1)])])},a=[],n=i("5530"),l=i("8e5f"),c=i.n(l),o=i("2f62"),r=i("7683"),u={data:function(){return{idCurrentFile:null,fileName:"",quantity:0,timeReceive:"",timeReturn:"",timeTest:"",reason:"",selectedResult:null,result:[{value:"Đạt",text:"Đạt"},{value:"Không đạt",text:"Không đạt"}],selectedKindFile:null,kindfile:[{id:"1",text:"Hồ sơ nghiệm thu công việc"},{id:"2",text:"Hồ sơ nghiệm thu vật liệu"},{id:"2",text:"Hồ sơ nghiệm thu thiết bị"}],selectedProject:null,project:[],isActive:!1}},components:{CompThemHs:r["a"],Multiselect:c.a},computed:Object(n["a"])({},Object(o["c"])(["storeqlda/getListDataUserGTer","currentUserPersonalInfo","storeqlda/currentUser"])),created:function(){var t=this;this.idCurrentFile=this.$route.params.id,void 0!==this.idCurrentFile&&this["storeqlda/getFileWithId"](this.idCurrentFile).then((function(e){t.fileName=e.data.tenHoSo,t.quantity=e.data.soLuong,t.timeReceive=e.data.ngayNhan,t.timeReturn=e.data.ngayTra,t.timeTest=e.data.lanKiemTra,t.reason=e.data.lyDoKhongDat,t.selectedResult=e.data.ketQua,t.selectedKindFile=JSON.parse(e.data.loaiHoSo),t.selectedProject=JSON.parse(e.data.duAn)})),this["storeqlda/getListProjectName"]().then((function(e){var i=e.data;for(var s in i){var a={id:i[s].id,text:i[s].tenDuAn};t.project.push(a)}}))},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["storeqlda/ActionCreateFile","storeqlda/getListDataUser","storeqlda/getListProjectName","storeqlda/getFileWithId","storeqlda/ActionUpdateFile"])),{},{custom_label:function(t){var e=t.text;return"".concat(e)},handleUpdate:function(){var t={duAn:JSON.stringify(this.selectedProject),loaiHoSo:JSON.stringify(this.selectedKindFile),kyHieuHoS:"hsnt",tenHoSo:this.fileName,soLuong:this.quantity,ngayNhan:this.timeReceive,ngayTra:this.timeReturn,lanKiemTra:this.timeTest,ketQua:this.result,lyDoKhongDat:this.reason,noiDungThayDoiTk:null,nguyenNhanThayDoiTk:null,nguoiPheDuyet:null,yKienTVGS:null,idFile:this.idCurrentFile};this["storeqlda/ActionUpdateFile"](t).then((function(t){alert(t.data)}))},handleSave:function(){var t={duAn:JSON.stringify(this.selectedProject),loaiHoSo:JSON.stringify(this.selectedKindFile),kyHieuHoSo:"hsnt",tenHoSo:this.fileName,soLuong:this.quantity,ngayNhan:this.timeReceive,ngayTra:this.timeReturn,lanKiemTra:this.timeTest,ketQua:this.selectedResult,lyDoKhongDat:this.reason,noiDungThayDoiTk:null,nguyenNhanThayDoiTk:null,nguoiPheDuyet:null,yKienTVGS:null};this["storeqlda/ActionCreateFile"](t).then((function(t){alert(t.data)}))},handleClick:function(){this.isActive=!this.isActive}})},d=u,h=(i("60bc"),i("7a8c"),i("2877")),m=Object(h["a"])(d,s,a,!1,null,"1b7933c3",null);e["default"]=m.exports},b721:function(t,e,i){"use strict";i("3ca7")}}]);
//# sourceMappingURL=chunk-2c7b8e8a.23360545.js.map