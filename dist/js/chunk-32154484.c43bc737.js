(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32154484"],{"1a73":function(t,e,a){"use strict";a("609f")},"609f":function(t,e,a){},dcb3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"block-select"},[a("div",{staticClass:"btn-add-cv"},[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs pt-4 pb-4",attrs:{size:"sm"},on:{click:t.handleClick}},[t._v(" Xem báo cáo ")])],1),a("div",{staticClass:"select-cbb"},[a("b-form-select",{attrs:{options:t.site},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Theo công trường --")])]},proxy:!0}]),model:{value:t.selectedSite,callback:function(e){t.selectedSite=e},expression:"selectedSite"}})],1),a("div",{staticClass:"select-cbb"},[a("b-form-select",{attrs:{options:t.time},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Theo thời gian --")])]},proxy:!0}]),model:{value:t.selectedTime,callback:function(e){t.selectedTime=e},expression:"selectedTime"}})],1),a("div",{staticClass:"search-congv"},[a("b-input-group",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",placeholder:"Search terms"}}),a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"arrow-repeat"}})],1)],1)],1)]),t._l(t.jsonArrResponse,(function(e,n){return a("div",{key:n,staticClass:"bccontainer pt-10"},[a("div",{staticClass:"baocao",attrs:{contenteditable:"true"}},[a("div",{staticClass:"kindBC flex items-center h-24"},[a("p",{staticClass:"text-3xl pl-60"},[t._v("BÁO CÁO TUẦN TƯ VẤN GIÁM SÁT")]),a("div",{staticClass:"action hidden flex pl-8"},[a("div",{staticClass:"pr-5"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.handleEdit(e,n)}}},[t._v(" Update ")])]),a("div",[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.handleDelete(n)}}},[t._v(" Delete ")])])])]),a("p",{staticClass:"dateBC"},[t._v(" Từ ngày "+t._s(t.getdate[0])+" đến ngày "+t._s(t.getdate[1])+" ")]),a("div",{staticClass:"project"},[a("p",{staticClass:"project_title"},[t._v("Dự án:")]),a("p",{staticClass:"ten_du_an"},[t._v(t._s(t.duan[n]))])]),a("div",{staticClass:"address"},[a("p",{staticClass:"project_title"},[t._v("Địa điểm:")]),a("p",{staticClass:"dia_diem_du_an"},[t._v(t._s(t.diadiem[n]))])]),a("div",{staticClass:"reccept"},[a("p",{staticClass:"project_title"},[t._v("Nơi nhận:")]),a("div",{staticClass:"name_reccept"},[a("p",[t._v("- Chủ đầu tư : "),a("span",{staticClass:"chu_dau_tu"},[t._v(t._s(t.cdt[n]))])]),a("p",[t._v("- Ban quản lý dự án : "),a("span",{staticClass:"ban_quan_ly"},[t._v(t._s(t.bql[n]))])]),a("p",[t._v("- Đồng gửi Văn phòng Công ty TVGS")])])]),a("p",{staticClass:"baocao_muc"},[t._v("I. CÔNG TÁC VĂN PHÒNG, HỒ SƠ, VĂN BẢN CỦA TVGS")]),t._l(t.hoSoArr[n],(function(e,n){return a("div",{key:"HS"+n,staticClass:"baocao_hosongthu"},[a("p",{staticClass:"baocao_contentcvngthu-noidunghoso"},[t._v(" "+t._s(e)+" ")])])})),a("p",{staticClass:"baocao_muc"},[t._v("II. CÔNG TÁC GIÁM SÁT THI CÔNG XÂY DỰNG")]),a("div",{staticClass:"baocao_contentcvngthu"},[t._l(t.tenNT[n],(function(e,s){return[a("div",{key:s,ref:"nament",refInFor:!0,staticClass:"baocao_contentcvngthu-nament"},[a("p",{staticClass:"nament"},[t._v(" "+t._s(e)+" ")]),t._l(t.getTencvNthu(n,e),(function(c,i){return[a("div",{key:"A"+i+s,staticClass:"baocao_contentcvngthu-mucngthu"},[t._v(" "+t._s(c)+" ")]),t._l(t.getNdcvNthu(n,e,c),(function(e,n){return a("p",{key:"B"+i+s+n,staticClass:"baocao_contentcvngthu-noidung"},[t._v(" "+t._s(e)+" ")])}))]}))],2)]}))],2),a("p",{staticClass:"baocao_muc"},[t._v("III. KIẾN NGHỊ, KHUYẾN CÁO CỦA TƯ VẤN GIÁM SÁT")]),t._l(t.kienNghiArr[n],(function(e,n){return a("div",{key:"KN"+n,staticClass:"baocao_kiennghi"},[a("p",{staticClass:"baocao_contentcvngthu-noidungkiennghi"},[t._v(" "+t._s(e)+" ")])])})),a("p",{staticClass:"baocao_muc"},[t._v(" IV. CÔNG TÁC AN TOÀN LAO ĐỘNG, VỆ SINH MÔI TRƯỜNG, PHÒNG CHÁY CHỮA CHÁY ")]),t._l(t.anToanArr[n],(function(e,n){return a("div",{key:"AT"+n,staticClass:"baocao_antoan"},[a("p",{staticClass:"baocao_contentcvngthu-noidungantoan"},[t._v(" "+t._s(e)+" ")])])})),a("p",{staticClass:"baocao_muc"},[t._v("V. HÌNH ẢNH ĐÍNH KÈM (NẾU CÓ)")]),a("div",{staticClass:"img_list"},t._l(t.imgArr[n],(function(e,s){return a("div",{key:s,staticClass:"img_list-item"},[a("img",{staticClass:"img_list-contentimg",attrs:{src:t.getStringUrl(n,s)}})])})),0),t._m(0,!0),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],2)])}))],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"baocao_footbc flex justify-between"},[a("div",[a("h5",{staticClass:"pt-2 pl-2"},[t._v("THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT")]),a("p",[t._v("Trưởng đoàn tư vấn giám sát")])]),a("div",[a("h5",{staticClass:"pt-2"},[t._v("NGƯỜI LÀM BÁO CÁO")]),a("p",{staticStyle:{"margin-right":"0"}},[t._v("Trưởng đoàn tư vấn giám sát")])])])}],c=a("5530"),i=(a("ac1f"),a("1276"),a("b64b"),a("99af"),a("5319"),a("2f62")),r={name:"tvgs-header",data:function(){return{indexMuc:[],dataGiamSat:[],mucArr:[],ndcvArr:[],tenNT:[],tenCvNthu:[],imgArr:[],hoSoArr:[],kienNghiArr:[],anToanArr:[],diadiem:[],duan:[],cdt:[],bql:[],jsonResponse:null,jsonArrResponse:[],selectedTime:"",time:[],selectedSite:null,site:[]}},created:function(){var t=this,e={kind:"W"};this["storeqlda/getNameProject"](e).then((function(e){var a=e.data;for(var n in a){var s={value:a[n].tenDuan,text:a[n].tenDuan};t.site.push(s)}}))},watch:{selectedSite:function(){var t=this,e={kind:"W",site:this.selectedSite};this.time=[],this["storeqlda/getTimeBaoCao"](e).then((function(e){var a=e.data;for(var n in a){var s={value:a[n].dateBaocao,text:a[n].dateBaocao};t.time.push(s)}}))}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["currentUserPersonalInfo","storeqlda/currentUser"])),{},{getdate:function(){var t=this.selectedTime.split("-");return t}}),methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["storeqlda/getTimeBaoCao","storeqlda/getListReport","storeqlda/getNameProject","storeqlda/deleteReport","storeqlda/updateReport"])),{},{getStringUrl:function(t,e){return this.imgArr[t][e]},getTencvNthu:function(t,e){return Object.keys(this.dataGiamSat[t][this.mucArr[t][1]][e])},getNdcvNthu:function(t,e,a){return this.dataGiamSat[t][this.mucArr[t][1]][e][a]},handleDelete:function(t){var e=this.jsonResponse.data.data,a=this["storeqlda/currentUser"].id;if(a==e[t].user_id){var n=e[t].id;this["storeqlda/deleteReport"](n).then((function(t){alert(t.data.message)}))}else alert("Bạn không được phép xóa báo cáo của người khác")},getParentSelect:function(t,e){while(t.parentElement){var a=t.parentElement;if(a.matches(e))return a;t=a}},handleEdit:function(t,e){var a,n=this.getParentSelect(t.target,".baocao"),s=n.querySelectorAll(".baocao_muc"),c=n.querySelectorAll(".baocao_contentcvngthu-noidunghoso"),i=n.querySelectorAll(".baocao_contentcvngthu-nament"),r=null,o=n.querySelectorAll(".nament"),l=n.querySelectorAll(".baocao_contentcvngthu-noidungkiennghi"),u=n.querySelectorAll(".baocao_contentcvngthu-noidungantoan"),d=n.querySelector(".ten_du_an"),h=n.querySelector(".dia_diem_du_an"),p=n.querySelector(".chu_dau_tu"),v=n.querySelector(".ban_quan_ly"),_="",m="",g="",b="";for(a=0;a<c.length;a++)b=""==b?'"'.concat(c[a].innerText,'"'):b+","+'"'.concat(c[a].innerText,'"');for(_='"'.concat(s[0].innerText,'":[').concat(b,"]"),b="",a=0;a<l.length;a++)b=""==b?'"'.concat(l[a].innerText,'"'):b+","+'"'.concat(l[a].innerText,'"');for(m='"'.concat(s[2].innerText,'":[').concat(b,"]"),b="",a=0;a<u.length;a++)b=""==b?'"'.concat(u[a].innerText,'"'):b+","+'"'.concat(u[a].innerText,'"');g='"'.concat(s[3].innerText,'":[').concat(b,"]"),b="";var C="",f="",T="";for(a=0;a<i.length;a++){r=i[a].querySelectorAll(".baocao_contentcvngthu-mucngthu");for(var S=0;S<r.length;S++){var N=r[S].nextElementSibling;while(N)if(b=""==b?'"'.concat(N.innerText,'"'):b+","+'"'.concat(N.innerText,'"'),N=N.nextElementSibling,null!==N&&"P"!=N.tagName)break;C=""==C?'"'.concat(r[S].innerText,'":[').concat(b,"]"):C+","+'"'.concat(r[S].innerText,'":[').concat(b,"]"),b=""}f=""==f?'"'.concat(o[a].innerText,'":{').concat(C,"}"):f+","+'"'.concat(o[a].innerText,'":{').concat(C,"}"),C=""}f='"'.concat(s[1].innerText,'":{').concat(f,"}"),T="{".concat(_,",").concat(f,",").concat(m,",").concat(g,"}");var A=this["storeqlda/currentUser"].id;if(A==this.jsonArrResponse[e].user_id){var k={contentJson:T,dateBaocao:this.selectedTime,tenDuan:d.innerText,diaDiem:h.innerText,chuDauTu:p.innerText,banQuanLy:v.innerText,idReport:this.jsonArrResponse[e].id};this["storeqlda/updateReport"](k).then((function(t){alert(t.data.message)}))}else alert("Bạn không được phép sửa báo cáo của người khác")},handleClick:function(){var t=this,e={time:this.selectedTime.replace(/\//g,"_"),nameProj:this.selectedSite};this.duan=[],this.diadiem=[],this.cdt=[],this.bql=[],this.mucArr=[],this.tenNT=[],this.hoSoArr=[],this.kienNghiArr=[],this.anToanArr=[],this.dataGiamSat=[],this.imgArr=[],this["storeqlda/getListReport"](e).then((function(e){t.jsonResponse=e,t.jsonArrResponse=e.data.data;var a=t.jsonArrResponse;for(var n in a)a.length>0&&(a[n].contentJson&&t.dataGiamSat.push(JSON.parse(a[n].contentJson.replace(/\\/g,""))),a[n].imgBase64&&t.imgArr.push(JSON.parse(a[n].imgBase64.replace(/\\/g,""))),a[n].tenDuan&&t.duan.push(a[n].tenDuan),a[n].diaDiem&&t.diadiem.push(a[n].diaDiem),a[n].chuDauTu&&t.cdt.push(a[n].chuDauTu),a[n].banQuanLy&&t.bql.push(a[n].banQuanLy),t.mucArr.push(Object.keys(t.dataGiamSat[n])),t.tenNT.push(Object.keys(t.dataGiamSat[n][t.mucArr[n][1]])),t.hoSoArr.push(t.dataGiamSat[n][t.mucArr[n][0]]),t.kienNghiArr.push(t.dataGiamSat[n][t.mucArr[n][2]]),t.anToanArr.push(t.dataGiamSat[n][t.mucArr[n][3]]))}))}})},o=r,l=(a("1a73"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,"594e8d69",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-32154484.c43bc737.js.map