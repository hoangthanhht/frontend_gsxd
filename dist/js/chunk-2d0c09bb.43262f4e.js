(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c09bb"],{4306:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container bg-white grid grid-cols-4 gap-x-2 pt-10"},[s("div",{staticClass:"pl-5 pr-5"},[s("p",[s("span",[t._v("Chủ đề : ")]),t._v(t._s(t.getPostView.chuDe))]),s("p",[s("span",[t._v("Người đăng bài : ")]),t._v(t._s(t.getPostView.tacGia))]),s("p",[s("span",[t._v("Thời gian đăng bài : ")]),t._v(t._s(t.convertUTCDateToLocalDate(new Date(t.getPostView.created_at))))])]),s("div",{staticClass:"col-span-3"},[s("h3",[t._v(t._s(t.getPostView.tieuDe))]),s("hr",{staticStyle:{height:"2px","border-width":"0",color:"gray","background-color":"gray"}}),s("div",{staticClass:"content_post",domProps:{innerHTML:t._s(t.getPostView.editorData)}})])])},a=[],n=s("5530"),o=s("2f62"),i={name:"postview",data:function(){return{currentPost:null}},methods:{convertUTCDateToLocalDate:function(t){var e=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),s=t.getTimezoneOffset()/60,r=t.getHours();e.setHours(r-s);var a=e.getHours()+" : "+e.getMinutes()+" Ngày "+e.getDate()+" / "+e.getMonth()+" / "+e.getFullYear();return a}},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["storeqlda/getListPost","storeqlda/currentUser","currentUserPersonalInfo"])),{},{dataArrPost:function(){return this["storeqlda/getListPost"]},getPostView:function(){var t=parseInt(this.currentPost);return this.dataArrPost[t]}}),created:function(){this.currentPost=this.$route.params.id}},c=i,u=s("2877"),g=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0c09bb.43262f4e.js.map