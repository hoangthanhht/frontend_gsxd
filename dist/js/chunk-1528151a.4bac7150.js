(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1528151a"],{"739a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"col-md-2"},[s("button",{attrs:{id:"button"},on:{click:t.handleClick}},[t._v("Xem Bao Cao")])]),s("div",{staticClass:"bccontainer"},[s("div",{staticClass:"baocao",attrs:{contenteditable:"true"}},[s("p",{staticClass:"kindBC"},[t._v("BÁO CÁO THÁNG TƯ VẤN GIÁM SÁT")]),s("p",{staticClass:"dateBC"},[t._v("Ngày 08 tháng 04 năm 2020")]),t._m(0),t._m(1),t._m(2),s("p",{staticClass:"baocao_muc"},[t._v("I. CÔNG TÁC VĂN PHÒNG, HỒ SƠ, VĂN BẢN CỦA TVGS")]),s("div",{staticClass:"baocao_hosongthu"}),s("p",{staticClass:"baocao_muc"},[t._v("II. CÔNG TÁC GIÁM SÁT THI CÔNG XÂY DỰNG")]),s("div",{staticClass:"baocao_contentcvngthu"},[t._l(t.tenNT,(function(e,a){return[s("div",{key:a,staticClass:"baocao_contentcvngthu-nament"},[t._v(" "+t._s(e)+" ")]),t._l(t.getTencvNthu(e),(function(c,i){return[s("div",{key:"A"+i+a,staticClass:"baocao_contentcvngthu-mucngthu"},[t._v(" "+t._s(c)+" ")]),t._l(t.getNdcvNthu(e,c),(function(e,c){return s("p",{key:"B"+i+a+c,staticClass:"baocao_contentcvngthu-noidung"},[t._v(" "+t._s(e)+" ")])}))]}))]}))],2),s("p",{staticClass:"baocao_muc"},[t._v("III. KIẾN NGHỊ, KHUYẾN CÁO CỦA TƯ VẤN GIÁM SÁT")]),s("div",{staticClass:"baocao_kiennghi"}),s("p",{staticClass:"baocao_muc"},[t._v(" IV. CÔNG TÁC AN TOÀN LAO ĐỘNG, VỆ SINH MÔI TRƯỜNG, PHÒNG CHÁY CHỮA CHÁY ")]),s("div",{staticClass:"baocao_antoan"}),s("p",{staticClass:"baocao_muc"},[t._v("V. HÌNH ẢNH ĐÍNH KÈM (NẾU CÓ)")]),s("div",{staticClass:"img_list"},t._l(t.imgArr,(function(e,a){return s("div",{key:a,staticClass:"img_list-item"},[s("img",{staticClass:"img_list-contentimg",attrs:{src:t.getStringUrl(a)}})])})),0),t._m(3),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project"},[s("p",{staticClass:"project_title"},[t._v("Dự án:")]),s("p",[t._v("XÂY DỰNG TÒA NHÀ CÔNG TY CP GIÁ XÂY DỰNG")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address"},[s("p",{staticClass:"project_title"},[t._v("Địa điểm:")]),s("p",[t._v("Số 124, Nguyễn Ngọc Nại, Thanh Xuân, Hà Nội")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reccept"},[s("p",{staticClass:"project_title"},[t._v("Nơi nhận:")]),s("div",{staticClass:"name_reccept"},[s("p",[t._v("- Chủ đầu tư")]),s("p",[t._v("- Ban quản lý dự án")]),s("p",[t._v("- Đồng gửi Văn phòng Công ty TVGS")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"baocao_footbc"},[s("h5",[t._v("THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT")]),s("p",[t._v("Trưởng đoàn tư vấn giám sát")])])}],i=s("5530"),n=(s("b64b"),s("d3b7"),s("ac1f"),s("5319"),s("2f62")),r={name:"tvgs-header",data:function(){return{url:"http://127.0.0.1:8000/api/v1/products",indexMuc:[],selectedFile:null,rowObject:[],mucArr:[],ndcvArr:[],tenNT:[],tenCvNthu:[],imgArr:[]}},created:function(){this.getListReport(this.getTokenStorage)},watch:{},computed:Object(i["a"])({},Object(n["c"])(["getListPost","getTokenStorage"])),methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["getListReport"])),{},{getStringUrl:function(t){return this.imgArr[t]},handleClickGet:function(){},getTencvNthu:function(t){return Object.keys(this.rowObject[this.mucArr[1]][t])},getNdcvNthu:function(t,e){return this.rowObject[this.mucArr[1]][t][e]},handleArr:function(){this.mucArr=Object.keys(this.rowObject),this.tenNT=Object.keys(this.rowObject[this.mucArr[1]]),this.tenCvNthu=Object.keys(this.rowObject[this.mucArr[1]][this.tenNT[1]])},handleClickPost:function(){this.handleArr()},handlePostMethod:function(t){var e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};fetch(this.url,e)},handleChange:function(t){this.selectedFile=t.target.files[0],this.parseExcelFile(this.selectedFile)},handleClick:function(){this.getListPost.data[2].contentJson&&(this.rowObject=JSON.parse(this.getListPost.data[2].contentJson.replace(/\\/g,"")),this.handleArr()),this.getListPost.data[2].imgBase64&&(this.imgArr=JSON.parse(this.getListPost.data[2].imgBase64.replace(/\\/g,"")))}})},o=r,l=(s("ffe0"),s("2877")),u=Object(l["a"])(o,a,c,!1,null,"7eade2a4",null);e["default"]=u.exports},de62:function(t,e,s){},ffe0:function(t,e,s){"use strict";s("de62")}}]);
//# sourceMappingURL=chunk-1528151a.4bac7150.js.map