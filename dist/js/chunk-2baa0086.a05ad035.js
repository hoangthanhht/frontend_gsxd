(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2baa0086"],{"367a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-gr"},[a("div",{staticClass:"add-gr1"},[a("h5",{staticClass:"mb-3 header-title"},[t._v("Thêm nhân sự")]),a("b-form",[a("div",{staticClass:"grid grid-flow-col grid-cols-7 grid-rows-3 gap-2"},[a("b-form-group",{staticClass:"col-span-5",attrs:{id:"input-group-1",label:"Tên dự án","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập dự án",required:""},model:{value:t.nameProject,callback:function(e){t.nameProject=e},expression:"nameProject"}})],1),a("b-form-group",{staticClass:"col-span-5",attrs:{id:"input-group-1",label:"Mẫ dự án","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập mã dự án",required:""},model:{value:t.codeProject,callback:function(e){t.codeProject=e},expression:"codeProject"}})],1),a("b-form-group",{staticClass:"col-span-5",attrs:{id:"input-group-1",label:"Mẫ dự án","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập mã dự án",required:""},model:{value:t.codeProject,callback:function(e){t.codeProject=e},expression:"codeProject"}})],1),a("div",{staticClass:"bg-green-400  col-span-2 row-span-3 mt-10 mb-10"},[t._v(" ảnh ")])],1),a("b-form-group",{attrs:{id:"input-group-1",label:"Tên chủ đầu tư","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nhập tên chủ đầu tư",required:""},model:{value:t.nameInvestor,callback:function(e){t.nameInvestor=e},expression:"nameInvestor"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Mô tả, ghi chú về dự án","label-for":"input-2"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Mô tả, ghi chú về dự án",rows:"3","max-rows":"6"},model:{value:t.descriptionProject,callback:function(e){t.descriptionProject=e},expression:"descriptionProject"}})],1),a("div",{staticClass:"add-gr11"},[a("div",{staticClass:"add-gr111"},[a("b-form-group",{attrs:{id:"input-group-1",label:"Ngày bắt đầu tiếp nhận:","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),a("div",{staticClass:"add-gr111"},[a("b-form-group",{attrs:{id:"input-group-1",label:"Thời gian kết thúc dự kiến:","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeExpect,callback:function(e){t.timeExpect=e},expression:"timeExpect"}})],1)],1)]),a("div",{staticClass:"add-gr11"},[a("div",{staticClass:"add-gr111"},[a("b-form-group",{attrs:{id:"input-group-1",label:"Thời gian kết thúc thực tế:","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.timeReal,callback:function(e){t.timeReal=e},expression:"timeReal"}})],1)],1),a("div",{staticClass:"add-gr111"},[a("b-form-group",{attrs:{id:"input-group-1",label:"Trạng thái dự án::","label-for":"input-1"}},[a("b-form-select",{attrs:{options:t.status_project},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Trạng thái dự án: --")])]},proxy:!0}]),model:{value:t.selectedStatusProject,callback:function(e){t.selectedStatusProject=e},expression:"selectedStatusProject"}})],1)],1)])],1)],1),a("div",{staticClass:"add-gr2"},[a("h5",{staticClass:"mb-3 header-title"},[t._v("Nhân viên tham gia dự án")]),a("b-form",[a("b-form-group",{attrs:{id:"input-group-1",label:"Nhân sự phụ trách chính:","label-for":"input-1"}},[a("multiselect",{attrs:{multiple:"","custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.persion_main},model:{value:t.selectedPersionMain,callback:function(e){t.selectedPersionMain=e},expression:"selectedPersionMain"}})],1)],1),a("b-form",[a("b-form-group",{attrs:{id:"input-group-1",label:"Nhân sự liên quan:","label-for":"input-1"}},[a("multiselect",{attrs:{multiple:"","custom-label":t.custom_label,label:"name","track-by":"id",selectLabel:"Ấn enter để chọn",deselectLabel:"Ấn enter để bỏ chọn",options:t.project_involve},model:{value:t.selectedInvolve,callback:function(e){t.selectedInvolve=e},expression:"selectedInvolve"}})],1)],1)],1),a("div",{staticClass:"add-gr3"},[a("h5",[t._v("File và tài liệu liên quan")]),a("b-form-file",{staticClass:"z-0 cursor-pointer",attrs:{id:"file-small",size:"sm"}})],1),a("div",{staticClass:"add-gr4"},[a("div",{staticClass:"add-gr41"},[a("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[a("b-tab",{attrs:{title:"Ghi Chú",active:""}},[a("p",[t._v(" Sau khi thêm bản ghi bạn có thể sử dụng chức năng ghi chú Giúp bạn ghi lại những gì liên quan đến bản ghi này theo từng giai đoạn, thời gian khác nhau Nội dung sẽ được hiển thị theo format mẫu bên dưới. ")])]),a("b-tab",{attrs:{title:"Lịch Sử"}},[a("p",[t._v(" Dưới đây là lịch sử các lần cập nhật dữ liệu Giúp bạn xem được ai đã cập nhật thông tin? cập nhật vào lúc nào? và cập nhật những gì? Nội dung sẽ được hiển thị theo format mẫu bên dưới. ")])])],1)],1),t._m(0)]),a("div",{staticClass:"add-gr5"},[a("div",{staticClass:"add-gr51"},[a("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"}},[a("b-icon",{attrs:{icon:"x-octagon-fill","aria-hidden":"true"}}),t._v(" Bỏ qua ")],1)],1),a("div",{staticClass:"add-gr51 add-gr52"},[a("b-button",{staticClass:"mb-2 tao-cv",attrs:{size:"sm"},on:{click:t.handleSave}},[a("b-icon",{attrs:{icon:"check2","aria-hidden":"true"}}),t._v(" Cập nhật ")],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-gr41"},[a("p",[t._v(" Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú. Nội dung ghi chú sẽ được hiển thị ở đây ")])])}],r=a("5530"),s=(a("b0c0"),a("ac1f"),a("1276"),a("8e5f")),c=a.n(s),l=a("2f62"),o={name:"add_task",components:{Multiselect:c.a},data:function(){return{text:"",currentTab:0,nameProject:"",codeProject:"",nameInvestor:"",descriptionProject:"",timeStart:"",timeExpect:"",timeReal:"",selectedStatusProject:null,status_project:[{value:"Dự án mới",text:"Dự án mới"},{value:"Chưa hoàn thành",text:"Chưa hoàn thành"},{value:"Đã hoàn thành",text:"Đã hoàn thành"}],selectedPersionMain:null,persion_main:[],selectedInvolve:null,project_involve:[]}},created:function(){var t=this;this["storeqlda/getListDataUser"]().then((function(){var e=t["storeqlda/getListDataUserGTer"];for(var a in e){var i={id:e[a].id,text:e[a].name};t.persion_main.push(i),t.project_involve.push(i)}}))},mounted:function(){},computed:Object(r["a"])({},Object(l["c"])(["storeqlda/getListDataUserGTer","currentUserPersonalInfo","storeqlda/currentUser"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["storeqlda/ActionCreateProject","storeqlda/getListDataUser"])),{},{custom_label:function(t){var e=t.text;return"".concat(e)},handleSave:function(){var t="",e="",a="";if(this.timeStart){var i=this.timeStart.split("-");t=i[2]+"/"+i[1]+"/"+i[0]}if(this.timeExpect){var n=this.timeExpect.split("-");e=n[2]+"/"+n[1]+"/"+n[0]}if(this.timeReal){var r=this.timeReal.split("-");a=r[2]+"/"+r[1]+"/"+r[0]}var s="";for(var c in this.selectedPersionMain)s=s?s+","+this.selectedPersionMain[c].text:this.selectedPersionMain[c].text;var l="";for(var o in this.selectedInvolve)l=l?l+","+this.selectedInvolve[o].text:this.selectedInvolve[o].text;var d={tenDuAn:this.nameProject,maDuAn:this.codeProject,tenCdt:this.nameInvestor,moTaDuAn:this.descriptionProject,ngayBatDau:t,ngayKetThuc:e,ngayKetThucThucTe:a,trangThai:this.selectedStatusProject,nhanSuChinh:s,nhanSuLienQuan:l};this["storeqlda/ActionCreateProject"](d).then((function(t){alert(t.data)}))}}),watch:{}},d=o,u=(a("cc3c"),a("9aa7"),a("2877")),p=Object(u["a"])(d,i,n,!1,null,"1695b1a5",null);e["default"]=p.exports},"57e5":function(t,e,a){},"9aa7":function(t,e,a){"use strict";a("b03f")},b03f:function(t,e,a){},cc3c:function(t,e,a){"use strict";a("57e5")}}]);
//# sourceMappingURL=chunk-2baa0086.a05ad035.js.map