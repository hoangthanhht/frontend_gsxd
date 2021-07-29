import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import { SET_PERSONAL_INFO } from './profile.module';
// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {
	  user:{
		name:'demoName',
		email:'demoEmail',
		role:'demoRole'
	  }
  },
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  getcurrentUserAccountInfo(state) {
    return state.user;
  },
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    
    return new Promise(resolve => {
      ApiService.post("login", credentials)
        .then(({ data }) => {
         //console.log('LOGIN](context, credentials',data)
			context.commit(SET_AUTH, data);
			context.commit(SET_PERSONAL_INFO, data,{ root: true });
		  resolve(data);
         })
        .catch(({ response }) => {
          console.log('loi',response);
          if(response.status === 503) {// trong trường hợp bảo trì hệ thống
            alert(response.data + ' bạn hãy quay lại trong ít thời gian nữa')
          }
          if(response.status === 401) {// trong trường hợp bảo trì hệ thống
            alert(response.data.error)
          }
          //context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
    
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          context.commit(SET_PERSONAL_INFO, data,{ root: true });
          resolve(data);
        })
        .catch(({ response }) => {
          
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("details")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
         
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {

  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    //console.log('state.user.token',state.user.token)
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
