(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-511fb270"],{3210:function(t,e,a){"use strict";a("51b4")},3892:function(t,e,a){"use strict";a("d9ea")},4570:function(t,e,a){var s={"./dark.scss":["0686","chunk-743e4b25"],"./light.scss":["0b86","chunk-74524b79"]};function i(t){if(!a.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],i=e[0];return a.e(e[1]).then((function(){return a.t(i,7)}))}i.keys=function(){return Object.keys(s)},i.id="4570",t.exports=i},"465b":function(t,e,a){},"51b4":function(t,e,a){},"51c9":function(t,e,a){"use strict";a("f016")},"903d":function(t,e,a){var s={"./dark.scss":["1d9c","chunk-746154ec"],"./light.scss":["d500","chunk-771a7e38"]};function i(t){if(!a.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],i=e[0];return a.e(e[1]).then((function(){return a.t(i,7)}))}i.keys=function(){return Object.keys(s)},i.id="903d",t.exports=i},"96c0":function(t,e,a){var s={"./dark.scss":["a4ad","chunk-76f08193"],"./light.scss":["5ab3","chunk-7498e9ec"]};function i(t){if(!a.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],i=e[0];return a.e(e[1]).then((function(){return a.t(i,7)}))}i.keys=function(){return Object.keys(s)},i.id="96c0",t.exports=i},ac80:function(t,e,a){"use strict";a("465b")},d2a8:function(t,e,a){var s={"./dark.scss":["6e66","chunk-74a82e1a"],"./light.scss":["7f1c","chunk-74b6aca8"]};function i(t){if(!a.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],i=e[0];return a.e(e[1]).then((function(){return a.t(i,7)}))}i.keys=function(){return Object.keys(s)},i.id="d2a8",t.exports=i},d9ea:function(t,e,a){},f016:function(t,e,a){},f826:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isAuthenticated?a("div",{staticClass:"d-flex flex-column flex-root"},[a("KTHeaderMobile"),t.loaderEnabled?a("Loader",{attrs:{logo:t.loaderLogo}}):t._e(),a("div",{staticClass:"d-flex flex-row flex-column-fluid page"},[a("div",{staticClass:"d-flex flex-column flex-row-fluid wrapper",attrs:{id:"kt_wrapper"}},[a("KTHeader"),a("div",{staticClass:"content d-flex flex-column flex-column-fluid",attrs:{id:"kt_content"}},[t.subheaderDisplay?a("KTSubheader",{attrs:{breadcrumbs:t.breadcrumbs,title:t.pageTitle}}):t._e(),a("div",{staticClass:"d-flex flex-column-fluid"},[a("div",{class:{"container-fluid":t.contentFluid,container:!t.contentFluid}},[a("transition",{attrs:{name:"fade-in-up"}},[a("router-view")],1)],1)])],1),a("KTFooter")],1)]),t.toolbarDisplay?a("KTStickyToolbar"):t._e(),a("KTScrollTop")],1):t._e()},i=[],n=a("5530"),r=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"kt_header",staticClass:"header",class:t.headerClasses,attrs:{id:"kt_header"}},[a("div",{staticClass:"container-fluid d-flex align-items-center justify-content-between"},[a("div",{ref:"kt_header_menu_wrapper",staticClass:"header-menu-wrapper header-menu-wrapper-left"},[t.headerMenuEnabled?a("div",{ref:"kt_header_menu",staticClass:"header-menu header-menu-mobile",class:t.headerMenuClasses,attrs:{id:"kt_header_menu"}},[a("KTMenu")],1):t._e()]),a("KTTopbar")],1)])},c=[],o=(a("a15b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar"},[a("b-dropdown",{attrs:{size:"sm",id:"kt_quick_search_toggle",variant:"link","toggle-class":"topbar-item text-decoration-none","no-caret":"",right:"","no-flip":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("div",{staticClass:"btn btn-icon btn-clean btn-lg btn-dropdown mr-1"},[a("span",{staticClass:"svg-icon svg-icon-xl svg-icon-primary"},[a("inline-svg",{attrs:{src:"media/svg/icons/General/Search.svg"}})],1)])]},proxy:!0}])},[a("b-dropdown-text",{staticClass:"min-w-md-350px",attrs:{tag:"div"}},[a("KTSearchDefault")],1)],1),a("KTQuickUser")],1)}),u=[],d=(a("7db0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quick-search quick-search-dropdown quick-search-result-compact",class:{"quick-search-has-result":t.hasResult()},attrs:{id:"kt_quick_search_dropdown"}},[a("form",{staticClass:"quick-search-form",attrs:{method:"get"}},[a("div",{staticClass:"input-group spinner-input spinner-sm spinner-brand spinner-right",class:{spinner:t.loading}},[t._m(0),a("input",{staticClass:"form-control quick-search-input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.stringSearch},on:{keypress:t.handleSearch,input:t.handleInput}}),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"quick-search-close",style:{display:t.hasResult()?"flex":""},on:{click:t.reset}})])])])]),a("KTSearchResult",{attrs:{data:t.data}})],1)}),m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"flaticon2-search-1"})])])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("perfect-scrollbar",{staticClass:"quick-search-wrapper scroll",staticStyle:{"max-height":"40vh",position:"relative"},attrs:{options:{suppressScrollX:!0}}},[a("div",{staticClass:"quick-search-result"},[t.data?t._e():a("div",{staticClass:"text-muted d-none"},[t._v(" No record found ")]),t._l(t.data,(function(e,s){return[0===e.type?a("div",{key:s,staticClass:"font-size-sm text-primary font-weight-bolder text-uppercase mb-2"},[t._v(" "+t._s(e.text)+" ")]):t._e(),1===e.type?a("div",{key:s,staticClass:"d-flex align-items-center flex-grow-1 mb-2"},[e.icon?a("div",{staticClass:"symbol symbol-30 flex-shrink-0"},[a("div",{staticClass:"symbol-label"},[a("i",{class:e.icon})])]):t._e(),e.img?a("div",{staticClass:"symbol symbol-30 flex-shrink-0"},[a("img",{staticClass:"symbol-label",attrs:{src:e.img,alt:""}})]):t._e(),e.svg?a("div",{staticClass:"symbol symbol-30 flex-shrink-0"},[a("img",{attrs:{src:e.svg,alt:""}})]):t._e(),a("div",{staticClass:"d-flex flex-column ml-3 mt-2 mb-2"},[a("a",{staticClass:"font-weight-bold text-dark text-hover-primary",attrs:{href:"#"}},[t._v(" "+t._s(e.text)+" ")]),e.desc?a("div",{staticClass:"font-size-sm font-weight-bold text-muted"},[t._v(" "+t._s(e.desc)+" ")]):t._e()])]):t._e()]}))],2)])},f=[],g={name:"KTSearchResult",props:{data:Array}},p=g,v=a("2877"),b=Object(v["a"])(p,h,f,!1,null,null,null),C=b.exports,_={name:"KTSearchDefault",components:{KTSearchResult:C},data:function(){return{data:[],loading:!1}},computed:Object(n["a"])({},Object(r["d"])({stringSearch:function(t){return t.storeqlda.stringSearch}})),methods:{handleInput:function(t){""==t.target.value&&this.$store.dispatch("storeqlda/handleSearch",t.target.value)},handleSearch:function(t){"Enter"==t.key&&this.$store.dispatch("storeqlda/handleSearch",t.target.value)},onSearch:function(t){var e=this;t.target.value.length>2&&(this.loading=!0,setTimeout((function(){e.data=e.result,e.loading=!1}),2e3))},hasResult:function(){return this.data.length||!1},reset:function(){this.data=[]}}},k=_,x=Object(v["a"])(k,d,m,!1,null,null,null),y=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar-item"},[a("div",{staticClass:"btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",attrs:{id:"kt_quick_user_toggle"}},[a("span",{staticClass:"text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"},[t._v(" Hi, ")]),a("span",{staticClass:"text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"},[t._v(" "+t._s(t.currentUserPersonalInfo.user.name)+" ")]),a("span",{staticClass:"symbol symbol-35 symbol-light-success"},[t._e(),a("span",{staticClass:"symbol-label font-size-h5 font-weight-bold"},[t._v(" "+t._s(t.currentUserPersonalInfo.user.name.charAt(0).toUpperCase())+" ")])])]),a("div",{ref:"kt_quick_user",staticClass:"offcanvas offcanvas-right p-10",attrs:{id:"kt_quick_user"}},[t._m(0),a("perfect-scrollbar",{staticClass:"offcanvas-content pr-5 mr-n5 scroll",staticStyle:{"max-height":"90vh",position:"relative"}},[a("div",{staticClass:"d-flex align-items-center mt-5"},[a("div",{staticClass:"symbol symbol-100 mr-5"},[a("img",{staticClass:"symbol-label",attrs:{src:t.currentUserPhoto,alt:""}}),a("i",{staticClass:"symbol-badge bg-success"})]),a("div",{staticClass:"d-flex flex-column"},[a("router-link",{staticClass:"font-weight-bold font-size-h5 text-dark-75 text-hover-primary",attrs:{to:"/custom-pages/profile"}},[t._v(" "+t._s(t.getFullName)+" ")]),a("div",{staticClass:"text-muted mt-1"},[t._v(t._s(t.currentUserPersonalInfo.user.role))]),a("div",{staticClass:"navi mt-2"},[a("a",{staticClass:"navi-item",attrs:{href:"#"}},[a("span",{staticClass:"navi-link p-0 pb-2"},[a("span",{staticClass:"navi-icon mr-1"},[a("span",{staticClass:"svg-icon svg-icon-lg svg-icon-primary"},[a("inline-svg",{attrs:{src:"media/svg/icons/Communication/Mail-notification.svg"}})],1)]),a("span",{staticClass:"navi-text text-muted text-hover-primary"},[t._v(" "+t._s(t.currentUserPersonalInfo.user.email)+" ")])])])]),a("button",{staticClass:"btn btn-light-primary btn-bold",on:{click:t.onLogout}},[t._v(" Sign out ")])],1)]),a("div",{staticClass:"separator separator-dashed mt-8 mb-5"}),a("div",{staticClass:"navi navi-spacer-x-0 p-0"}),a("div",{staticClass:"separator separator-dashed my-7"}),a("div",[a("h5",{staticClass:"mb-5"},[t._v("Recent Notifications")]),t._l(t.list,(function(e,s){return[a("div",{key:s,staticClass:"d-flex align-items-center rounded p-5 gutter-b",class:"bg-light-"+e.type},[a("span",{staticClass:"svg-icon mr-5",class:"svg-icon-"+e.type},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:e.svg}})],1)]),a("div",{staticClass:"d-flex flex-column flex-grow-1 mr-2"},[a("a",{staticClass:"font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",attrs:{href:"#"}},[t._v(" "+t._s(e.title)+" ")]),a("span",{staticClass:"text-muted font-size-sm"},[t._v(" "+t._s(e.desc)+" ")])]),a("span",{staticClass:"font-weight-bolder py-1 font-size-lg",class:"text-"+e.type},[t._v(" "+t._s(e.alt)+" ")])])]}))],2)])],1)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"offcanvas-header d-flex align-items-center justify-content-between pb-5"},[a("h3",{staticClass:"font-weight-bold m-0"},[t._v(" User Profile "),a("small",{staticClass:"text-muted font-size-sm ml-2"})]),a("a",{staticClass:"btn btn-xs btn-icon btn-light btn-hover-primary",attrs:{href:"#",id:"kt_quick_user_close"}},[a("i",{staticClass:"ki ki-close icon-xs text-muted"})])])}],O=(a("b0c0"),a("56ac")),E=a("92d2"),j=a("b2f7"),S={name:"KTQuickUser",data:function(){return{list:[]}},created:function(){var t=this;this["storeqlda/checkLogin"]().then((function(){t["storeqlda/getUrlAvatar"](t.currentUserPersonalInfo.user.id)}))},mounted:function(){E["a"].init(this.$refs["kt_quick_user"])},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["storeqlda/logout","storeqlda/getUrlAvatar","storeqlda/checkLogin"])),{},{onLogout:function(){var t=this;this.$store.dispatch(O["b"]).then((function(){return t.$router.push({name:"login"})})),this["storeqlda/logout"]()},closeOffcanvas:function(){new j["a"](E["a"].getElement()).hide()}}),computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["currentUserPersonalInfo","getcurrentUserAccountInfo","currentUserPhoto"])),{},{getFullName:function(){return this.currentUserPersonalInfo.user.name}})},A=S,$=(a("3892"),Object(v["a"])(A,w,T,!1,null,"33cc35fe",null)),K=$.exports,L={defaultLanguage:"en",languages:[{lang:"en",name:"English",flag:"/dist/media/svg/flags/226-united-states.svg"},{lang:"ch",name:"Mandarin",flag:"/dist/media/svg/flags/034-china.svg"},{lang:"es",name:"Spanish",flag:"/dist/media/svg/flags/128-spain.svg"},{lang:"jp",name:"Japanese",flag:"/dist/media/svg/flags/063-japan.svg"},{lang:"de",name:"German",flag:"/dist/media/svg/flags/162-germany.svg"},{lang:"fr",name:"French",flag:"/dist/media/svg/flags/195-france.svg"}],setActiveLanguage:function(t){localStorage.setItem("language",t)},getActiveLanguage:function(){return localStorage.getItem("language")||this.defaultLanguage}},U=L,q={name:"KTTopbar",data:function(){return{languageFlag:"",languages:U.languages}},components:{KTSearchDefault:y,KTQuickUser:K},methods:{onLanguageChanged:function(){this.languageFlag=this.languages.find((function(t){return t.lang===U.getActiveLanguage()})).flag}},computed:{getLanguageFlag:function(){return this.onLanguageChanged()}}},F=q,N=(a("51c9"),Object(v["a"])(F,o,u,!1,null,null,null)),D=N.exports,P=a("db1f"),M=a("ef72"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"menu-nav"},[a("router-link",{attrs:{to:"/dashboard"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("span",{staticClass:"menu-text"},[t._v("Trang Chủ")])])])]}}])}),a("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":t.hasActiveChildren("/vue-bootstrap")},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[t._m(0),a("div",{staticClass:"menu-submenu"},[a("span",{staticClass:"menu-arrow"}),a("ul",{staticClass:"menu-subnav"},[a("router-link",{attrs:{to:"/bangdinhmuc"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Bảng định mức")])])])]}}])}),a("router-link",{attrs:{to:"/approvenotenorm"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Phê duyệt định mức")])])])]}}])})],1)])]),a("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":t.hasActiveChildren("/vue-bootstrap")},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[t._m(1),a("div",{staticClass:"menu-submenu"},[a("span",{staticClass:"menu-arrow"}),a("ul",{staticClass:"menu-subnav"},[a("router-link",{attrs:{to:"/giavattu"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Bảng giá vật tư")])])])]}}])}),a("router-link",{attrs:{to:"/materialcostforguest"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Up giá vật tư")])])])]}}])}),a("router-link",{attrs:{to:"/approvematerialcost"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Phê duyệt giá vật tư")])])])]}}])})],1)])]),a("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":t.hasActiveChildren("/vue-bootstrap")},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[t._m(2),a("div",{staticClass:"menu-submenu"},[a("span",{staticClass:"menu-arrow"}),a("ul",{staticClass:"menu-subnav"},[a("router-link",{attrs:{to:"/dsnhanvien"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Danh sách nhân viên")])])])]}}])}),a("router-link",{attrs:{to:"/dsvaitro"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Danh sách vai trò")])])])]}}])})],1)])]),a("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":t.hasActiveChildren("/vue-bootstrap")},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[t._m(3),a("div",{staticClass:"menu-submenu"},[a("span",{staticClass:"menu-arrow"}),a("ul",{staticClass:"menu-subnav"},[a("router-link",{attrs:{to:"/cauhinhemail"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Cấu hình email")])])])]}}])}),a("router-link",{attrs:{to:"/cauhinhhethong"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Cấu hình hệ thống")])])])]}}])})],1)])]),a("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":t.hasActiveChildren("/vue-bootstrap")},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[t._m(4),a("div",{staticClass:"menu-submenu menu-submenu-classic"},[a("ul",{staticClass:"menu-subnav"},[a("router-link",{attrs:{to:"/profile/profile-2"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.href,i=e.navigate,n=e.isActive,r=e.isExactActive;return[a("li",{staticClass:"menu-item",class:[n&&"menu-item-active",r&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[a("a",{staticClass:"menu-link",attrs:{href:s},on:{click:i}},[a("i",{staticClass:"menu-bullet menu-bullet-dot"},[a("span")]),a("span",{staticClass:"menu-text"},[t._v("Cấu hình Profile")])])])]}}])})],1)])])],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[a("span",{staticClass:"menu-text"},[t._v("Định mức")]),a("i",{staticClass:"menu-arrow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[a("span",{staticClass:"menu-text"},[t._v("Giá vật tư")]),a("i",{staticClass:"menu-arrow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[a("span",{staticClass:"menu-text"},[t._v("Quản lý user")]),a("i",{staticClass:"menu-arrow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[a("span",{staticClass:"menu-text"},[t._v("Hệ Thống")]),a("i",{staticClass:"menu-arrow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[a("span",{staticClass:"menu-text"},[t._v(" Custom ")])])}],H={name:"KTMenu",methods:{hasActiveChildren:function(t){return-1!==this.$route["path"].indexOf(t)}}},R=H,G=Object(v["a"])(R,z,I,!1,null,null,null),Q=G.exports,J={name:"KTHeader",components:{KTTopbar:D,KTMenu:Q},mounted:function(){P["a"].init("kt_header","kt_header_mobile"),M["a"].init(this.$refs["kt_header_menu"],this.$refs["kt_header_menu_wrapper"])},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["layoutConfig","getClasses"])),{},{headerMenuEnabled:function(){return!!this.layoutConfig("header.menu.self.display")},headerClasses:function(){var t=this.getClasses("header");return"undefined"!==typeof t?t.join(" "):null},headerMenuClasses:function(){var t=this.getClasses("header_menu");return"undefined"!==typeof t?t.join(" "):null}})},B=J,X=Object(v["a"])(B,l,c,!1,null,null,null),V=X.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-mobile align-items-center",class:t.headerClasses,attrs:{id:"kt_header_mobile"}},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{alt:"Logo",src:t.headerLogo}})]),a("div",{staticClass:"d-flex align-items-center"},[t.asideEnabled?a("button",{staticClass:"btn p-0 burger-icon burger-icon-left",attrs:{id:"kt_aside_mobile_toggle"}},[a("span")]):t._e(),a("button",{ref:"kt_header_mobile_toggle",staticClass:"btn p-0 burger-icon ml-4",attrs:{id:"kt_header_mobile_toggle"}},[a("span")]),a("button",{ref:"kt_header_mobile_topbar_toggle",staticClass:"btn btn-hover-text-primary p-0 ml-2",attrs:{id:"kt_header_mobile_topbar_toggle"}},[a("span",{staticClass:"svg-icon svg-icon-xl"},[a("inline-svg",{staticClass:"svg-icon",attrs:{src:"media/svg/icons/General/User.svg"}})],1)])])])},Y=[],Z=a("cddd"),tt={name:"KTHeaderMobile",components:{},mounted:function(){Z["a"].init(this.$refs["kt_header_mobile_topbar_toggle"])},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["layoutConfig","getClasses"])),{},{headerLogo:function(){return"/dist/"+this.layoutConfig("self.logo.dark")},headerClasses:function(){var t=this.getClasses("header_mobile");return"undefined"!==typeof t?t.join(" "):null},asideEnabled:function(){return!!this.layoutConfig("aside.self.display")}})},et=tt,at=Object(v["a"])(et,W,Y,!1,null,null,null),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer bg-white py-4 d-flex flex-lg-column",attrs:{id:"kt_footer"}},[a("div",{staticClass:"d-flex align-items-center justify-content-between",class:{"container-fluid":t.widthFluid,container:!t.widthFluid}},[t._m(0),t._m(1)])])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-dark"},[a("span",{staticClass:"text-muted font-weight-bold mr-2"},[t._v(" 2020  ©  ")]),a("a",{staticClass:"text-dark-75 text-hover-primary",attrs:{href:"http://keenthemes.com/metronic",target:"_blank"}},[t._v(" Keenthemes ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav nav-dark"},[a("a",{staticClass:"nav-link pr-3 pl-0",attrs:{href:"http://keenthemes.com/metronic",target:"_blank"}},[t._v(" About ")]),a("a",{staticClass:"nav-link px-3",attrs:{href:"http://keenthemes.com/metronic",target:"_blank"}},[t._v(" Team ")]),a("a",{staticClass:"nav-link pl-3 pr-0",attrs:{href:"http://keenthemes.com/metronic",target:"_blank"}},[t._v(" Contact ")])])}],rt={name:"KTFooter",computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["layoutConfig"])),{},{widthFluid:function(){return"fluid"===this.layoutConfig("footer.width")}})},lt=rt,ct=Object(v["a"])(lt,it,nt,!1,null,null,null),ot=ct.exports,ut=(a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("159b"),a("3ca3"),a("ddb0"),a("6e87")),dt=a.n(ut),mt=a("c86f"),ht=a("6eee"),ft={config:null,init:function(t){"undefined"!==typeof t&&(this.config=t),this.initLayout(),this.initHeader(),this.initSubheader(),this.initAside(),this.initFooter(),this.initThemes()},initLayout:function(){if(dt.a.has(this.config,"self.body.class")){var t=dt.a.get(this.config,"self.body.class").toString();if(t){var e=t.split(" ");e.forEach((function(t){ht["a"].dispatch(mt["a"],t)}))}}var a=dt.a.get(this.config,"self.body.background-image");"undefined"!==typeof a&&(document.body.style.backgroundImage="url(".concat(a,")")),ht["a"].dispatch(mt["a"],"quick-panel-right"),ht["a"].dispatch(mt["a"],"demo-panel-right"),ht["a"].dispatch(mt["a"],"offcanvas-right"),ht["a"].dispatch(mt["c"],"header-menu-wrapper-on")},initHeader:function(){dt.a.get(this.config,"header.self.fixed.desktop")?(ht["a"].dispatch(mt["a"],"header-fixed"),ht["a"].dispatch(mt["b"],{position:"header",className:"header-fixed"})):ht["a"].dispatch(mt["a"],"header-static"),dt.a.get(this.config,"header.self.fixed.mobile")&&(ht["a"].dispatch(mt["a"],"header-mobile-fixed"),ht["a"].dispatch(mt["b"],{position:"header_mobile",className:"header-mobile-fixed"})),dt.a.get(this.config,"header.menu.self.display")&&(ht["a"].dispatch(mt["b"],{position:"header_menu",className:"header-menu-layout-".concat(dt.a.get(this.config,"header.menu.self.layout"))}),dt.a.get(this.config,"header.menu.self.root-arrow")&&ht["a"].dispatch(mt["b"],{position:"header_menu",className:"header-menu-root-arrow"}))},initSubheader:function(){dt.a.get(this.config,"subheader.fixed")&&dt.a.get(this.config,"header.self.fixed.desktop")&&ht["a"].dispatch(mt["a"],"subheader-fixed"),dt.a.get(this.config,"subheader.display")&&ht["a"].dispatch(mt["a"],"subheader-enabled"),dt.a.has(this.config,"subheader.style")&&ht["a"].dispatch(mt["a"],"subheader-".concat(dt.a.get(this.config,"subheader.style")))},initAside:function(){ht["a"].dispatch(mt["c"],"aside-enabled"),ht["a"].dispatch(mt["c"],"aside-fixed"),ht["a"].dispatch(mt["c"],"aside-static"),ht["a"].dispatch(mt["c"],"aside-minimize"),!0===dt.a.get(this.config,"aside.self.display")&&(ht["a"].dispatch(mt["a"],"aside-enabled"),dt.a.get(this.config,"aside.self.fixed")?(ht["a"].dispatch(mt["a"],"aside-fixed"),ht["a"].dispatch(mt["b"],{position:"aside",className:"aside-fixed"})):ht["a"].dispatch(mt["a"],"aside-static"),dt.a.get(this.config,"aside.self.minimize.default")&&ht["a"].dispatch(mt["a"],"aside-minimize"),dt.a.get(this.config,"aside.menu.dropdown")&&ht["a"].dispatch(mt["b"],{position:"aside_menu",className:"aside-menu-dropdown"}))},initFooter:function(){dt.a.get(this.config,"footer.fixed")&&ht["a"].dispatch(mt["a"],"footer-fixed")},initThemes:function(){if(dt.a.get(this.config,"header.self.theme")){var t=dt.a.get(this.config,"header.self.theme");a("4570")("./".concat(t,".scss"))}if(dt.a.get(this.config,"header.menu.desktop.submenu.theme")){var e=dt.a.get(this.config,"header.menu.desktop.submenu.theme");a("96c0")("./".concat(e,".scss"))}if(dt.a.get(this.config,"brand.self.theme")){var s=dt.a.get(this.config,"brand.self.theme");a("d2a8")("./".concat(s,".scss"))}if(dt.a.get(this.config,"aside.self.theme")){var i=dt.a.get(this.config,"aside.self.theme");a("903d")("./".concat(i,".scss"))}}},gt=ft,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subheader py-2 py-lg-4",class:t.subheaderClasses,attrs:{id:"kt_subheader"}},[a("div",{staticClass:"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap",class:{"container-fluid":t.widthFluid,container:!t.widthFluid}},[a("div",{staticClass:"d-flex align-items-center flex-wrap mr-1"},[a("h5",{staticClass:"text-dark font-weight-bold my-2 mr-5"},[t._v(" "+t._s(t.title)+" ")]),a("ul",{staticClass:"breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"subheader-breadcrumbs-home",attrs:{to:"/"}},[a("i",{staticClass:"flaticon2-shelter text-muted icon-1x"})])],1),t._l(t.breadcrumbs,(function(e,s){return[a("li",{key:s+"-"+e.id,staticClass:"breadcrumb-item"},[e.route?a("router-link",{key:s,staticClass:"text-muted",attrs:{to:e.route}},[t._v(" "+t._s(e.title)+" ")]):t._e(),e.route?t._e():a("span",{key:s,staticClass:"text-muted"},[t._v(" "+t._s(e.title)+" ")])],1)]}))],2)])])])},vt=[],bt={name:"KTSubheader",props:{breadcrumbs:Array,title:String},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["layoutConfig"])),{},{widthFluid:function(){return"fluid"===this.layoutConfig("subheader.width")},subheaderClasses:function(){var t=[],e=this.layoutConfig("subheader.style");return e&&(t.push(e),"solid"===e&&t.push("bg-white"),this.layoutConfig("subheader.fixed")&&t.push("border-top")),t.join(" ")}})},Ct=bt,_t=(a("ac80"),a("3210"),Object(v["a"])(Ct,pt,vt,!1,null,"d51452c0",null)),kt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4"},[a("li",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Layout builder",expression:"'Layout builder'",modifiers:{hover:!0,left:!0}}],staticClass:"nav-item mb-2"},[a("router-link",{staticClass:"btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary",attrs:{href:"#",to:{name:"giavattu"}}},[a("i",{staticClass:"flaticon2-gear"})])],1),a("li",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Documentation",expression:"'Documentation'",modifiers:{hover:!0,left:!0}}],staticClass:"nav-item"},[t._m(0)])])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning",attrs:{href:"https://keenthemes.com/metronic/?page=docs",target:"_blank"}},[a("i",{staticClass:"flaticon2-telegram-logo"})])}],wt={name:"KTStickyToolbar"},Tt=wt,Ot=Object(v["a"])(Tt,xt,yt,!1,null,null,null),Et=Ot.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"kt_scrolltop",staticClass:"scrolltop",attrs:{id:"kt_scrolltop"}},[a("span",{staticClass:"svg-icon"},[a("inline-svg",{attrs:{src:"media/svg/icons/Navigation/Up-2.svg"}})],1)])},St=[],At=a("6cf5"),$t={name:"KTScrollTop",mounted:function(){At["a"].init(this.$refs["kt_scrolltop"])}},Kt=$t,Lt=Object(v["a"])(Kt,jt,St,!1,null,null,null),Ut=Lt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-loader page-loader-logo"},[a("img",{attrs:{alt:"Logo",src:t.logo,width:"100"}}),a("div",{staticClass:"spinner",class:t.spinnerClass||"spinner-primary"})])},Ft=[],Nt={name:"Loader",props:{logo:String,spinnerClass:String}},Dt=Nt,Pt=Object(v["a"])(Dt,qt,Ft,!1,null,null,null),Mt=Pt.exports,zt={name:"Layout",components:{KTHeader:V,KTHeaderMobile:st,KTFooter:ot,KTSubheader:kt,KTStickyToolbar:Et,KTScrollTop:Ut,Loader:Mt},beforeMount:function(){this.$store.dispatch(mt["a"],"page-loading"),gt.init(this.layoutConfig())},mounted:function(){var t=this;this.isAuthenticated||this.$router.push({name:"login"}),setTimeout((function(){t.$store.dispatch(mt["c"],"page-loading")}),2e3)},methods:{},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["isAuthenticated","breadcrumbs","pageTitle","layoutConfig"])),{},{loaderEnabled:function(){return!/false/.test(this.layoutConfig("loader.type"))},contentFluid:function(){return"fluid"===this.layoutConfig("content.width")},loaderLogo:function(){return"/dist/"+this.layoutConfig("loader.logo")},asideEnabled:function(){return!!this.layoutConfig("aside.self.display")},toolbarDisplay:function(){return!0},subheaderDisplay:function(){return!!this.layoutConfig("subheader.display")}})},It=zt,Ht=Object(v["a"])(It,s,i,!1,null,null,null);e["default"]=Ht.exports}}]);
//# sourceMappingURL=chunk-511fb270.cf549674.js.map