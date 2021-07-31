import Vue from "vue";
import Router from "vue-router";
import store from "@/core/services/store";
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/dashboard",
			component: () => import("@/view/layout/Layout"),
			children: [
				{
					path: "/dashboard",
					name: "dashboard",
					component: () => import("@/view/pages/Dashboard.vue"),			
				},

				{
					path: "/congviecgiao",
					name: "congviecgiao",
					component: () => import("@/view/pages/Congviecgiao.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin']
					}
				},
				{
					path: "/baocaohoatdongcongtruong",
					name: "baocaohoatdongcongtruong",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/bc_tonghop.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin']
					}
				},
				{
					path: "/nhattrinh",
					name: "nhattrinh",
					component: () => import("@/view/pages/baocao/nhat_trinh/nhat_trinh.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/theodoithicong",
					name: "theodoithicong",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/theodoithicong.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/nghiemthucongviec",
					name: "nghiemthucongviec",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/nghiemthucongviec.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/nghiemthuvatlieu",
					name: "nghiemthuvatlieu",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/nghiemthuvatlieu.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/giamsatnhanluc",
					name: "giamsatnhanluc",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/gsatnhanluc.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/giamsatthietbi",
					name: "giamsatthietbi",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/gsatthietbi.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/giamsatthinghiem",
					name: "giamsatthinghiem",
					component: () => import("@/view/pages/baocao/baochoatdongctrg/gsatthinghiem.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/baocaothang",
					name: "baocaothang",
					component: () => import("@/view/pages/baocao/bao_cao_thang/bao_cao_thang.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				{
					path: "/baocaokhoiquanly",
					name: "baocaokhoiquanly",
					component: () => import("@/view/pages/baocao/bao_cao_qly/bao_cao_quan_ly.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/themcongviec",
					name: "themcongviec",
					component: () => import("@/view/pages/Themcongviec.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				//{
					// path: "/createarticle",
					// name: "createarticle",
					// component: () => import("@/view/pages/CreateArticle.vue"),
					// beforeEnter: (to, from, next) =>  {
					// 	let userSlug = (store.getters.currentUserPersonalInfo.slug)
					// 	if(userSlug) {
					// 		let check = false;
					// 		for(var i in userSlug)
					// 		{
					// 			//slugUser.push(userSlug[i]);
					// 			if(to.meta.requiredRoles.includes(userSlug[i])){
					// 				check = true;
					// 				break;
					// 			}
					// 		}
	
					// 		if (check === true) {
					// 			next()
					// 		} else {
								
					// 			next({
					// 				path: "/custom-error/page_error"
					// 			})
					// 		}
					// 	}else {
					// 		store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
					// 			// sử lý khi reload lại trang tại đúng route này
					// 			let check = false;
					// 			let userSlug = (store.getters.currentUserPersonalInfo.slug)
					// 			for(var i in userSlug)
					// 			{
					// 				//slugUser.push(userSlug[i]);
					// 				if(to.meta.requiredRoles.includes(userSlug[i])){
					// 					check = true;
					// 					break;
					// 				}
					// 			}
		
					// 			if (check === true) {
					// 				next()
					// 			} else {
									
					// 				next({
					// 					path: "/custom-error/page_error"
					// 				})
					// 			}
					// 		});
					// 	}
					// },
					// meta: {
					// 	requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv','User']
					// }
				//},
				{
					path: "/dsnhanvien",
					name: "dsnhanvien",
					component: () => import("@/view/pages/Danhsachnhanvien.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				{
					path: "/dsvaitro",
					name: "dsvaitro",
					component: () => import("@/view/pages/Danhsachvaitro.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},	
				
				{
					path: "/cauhinhemail",
					name: "cauhinhemail",
					component: () => import("@/view/pages/admin/Cauhinhemail.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin']
					}
				},

				{
					path: "/cauhinhhethong",
					name: "cauhinhhethong",
					component: () => import("@/view/pages/admin/Cauhinhhethong.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin']
					}
				},
				{
					path: "/profile",
					name: "profile",
					component: () => import("@/view/pages/profile/Profile.vue"),
					children: [
					  {
						path: "profile-2",
						name: "profile-2",
						component: () => import("@/view/pages/profile/Profile-2.vue")
					  }
					]
				}
				
			],
	
		},
		{
			path: "/custom-error",
			name: "error",
			component: () => import("@/view/pages/error/Error.vue"),
			children: [
				{
					path: "error-1",
					name: "error-1",
					component: () => import("@/view/pages/error/Error-1.vue")
				},
				{
					path: "error-2",
					name: "error-2",
					component: () => import("@/view/pages/error/Error-2.vue")
				},
				{
					path: "error-3",
					name: "error-3",
					component: () => import("@/view/pages/error/Error-3.vue")
				},
				{
					path: "error-4",
					name: "error-4",
					component: () => import("@/view/pages/error/Error-4.vue")
				},
				{
					path: "error-5",
					name: "error-5",
					component: () => import("@/view/pages/error/Error-5.vue")
				},
				{
					path: "error-6",
					name: "error-6",
					component: () => import("@/view/pages/error/Error-6.vue")
				},	
				{
					path: "page_error",
					name: "page_error",
					component: () => import("@/view/pages/error/page_error.vue")
				},
			]
		},
		{
			path: "/",
			component: () => import("@/view/pages/auth/login_pages/Login-1"),
			children: [
				{
					name: "login",
					path: "/login",
					component: () => import("@/view/pages/auth/login_pages/Login-1"),
					meta: {
						requiredRoles: ['user1', 'user1']
					}
				},
				{
					name: "register",
					path: "/register",
					component: () => import("@/view/pages/auth/login_pages/Login-1")
				}
			]
		},
		{
			name: "forgotPass",
			path: "/changepass/:token",
			component: () => import("@/view/pages/auth/login_pages/reset-password"),
			
		},
		{
			path: "*",
			redirect: "/404"
		},
		{
			// the 404 route, when none of the above matches
			path: "/404",
			name: "404",
			component: () => import("@/view/pages/error/Error-1.vue")
		}
	]
});
