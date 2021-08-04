import axiosInstance from '../../plugins/axios';
import { CONFIG_ACCESS_TOKEN } from '../../constants';
import { SET_AUTH } from '../store_metronic/auth.module';
import { SET_PERSONAL_INFO, SET_PERSONAL_PHOTO } from '../store_metronic/profile.module';
import JwtService from "@/core/services/jwt.service";
import ApiService from "@/core/services/api.service";

export default {

    /* gọi api cho  đinh mức */
    async CreateDinhMucFromFile(context, { tempFinalRs = '', idUserImport = '' }) {
        try {
            let data = {
                jsonData: tempFinalRs,
                idUserImport: idUserImport,
            }
            var result = await axiosInstance.post(`/CreateDinhMucFromFile/${data.idUserImport}`, data);

            // commit('SET_LOADING', false);
            if (result.status === 200) {

                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                } else {
                    return {
                        ok: true,
                        error: null,
                        data: result.data
                    }
                }

            } else {
                return {
                    ok: false,
                    error: result.data.error
                }

            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async getAllDataTableDmContribute({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }


        try {

            var result = await axiosInstance.get('/getAllDataTableDmContribute', config);
            commit('SET_LIST_DATADM_CONTRIBUTE', result.data.data)
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getAllListDataDm({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }
        try {
            var result = await axiosInstance.get('/getAllDataTableDm', config);
            commit('SET_LIST_DATADM', result.data.data)
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListDataDmHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getDataTableDm?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListDataDmContributeHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getDataTableDmContribute?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    // hàm api update dinhmuc
    async updateDataWithId(context, { maDinhMuc = '', tenMaDinhMuc = '', noteDinhMuc = '', idDinhMuc = ''
        , idUser = '', donVi_VI = '', tenCv_EN = '', donVi_EN = '', url = '' }) {

        let data = {
            maDinhMuc: maDinhMuc,
            tenMaDinhMuc: tenMaDinhMuc,
            ghiChuDinhMuc: noteDinhMuc,
            id: idDinhMuc,
            donVi_VI: donVi_VI,
            tenCv_EN: tenCv_EN,
            donVi_EN: donVi_EN,
            url: url,
            idUser: idUser
        }


        try {

            var result = await axiosInstance.post(`updateDataDm/${data.id}/${data.idUser}`, data);

            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },

    async updateDataDmContributeWithId(context, { maDinhMuc = '', tenMaDinhMuc = '', noteDinhMuc = '', idDinhMuc = ''
        , idUser = '', donVi_VI = '', tenCv_EN = '', donVi_EN = '', url = '' }) {

        let data = {
            maDinhMuc: maDinhMuc,
            tenMaDinhMuc: tenMaDinhMuc,
            ghiChuDinhMuc: noteDinhMuc,
            id: idDinhMuc,
            donVi_VI: donVi_VI,
            tenCv_EN: tenCv_EN,
            donVi_EN: donVi_EN,
            url: url,
            idUser: idUser
        }


        try {

            var result = await axiosInstance.post(`updateDataDmContribute/${data.id}/${data.idUser}`, data);

            if (result.status === 200) {

                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.message,
                    error: null
                }


            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    async handleApproveContributeWithId(context, { maDinhMuc = '', tenMaDinhMuc = '', noteDinhMuc = '', idDinhMuc = ''
        , idUser = '', donVi_VI = '', tenCv_EN = '', donVi_EN = '' }) {

        let data = {
            maDinhMuc: maDinhMuc,
            tenMaDinhMuc: tenMaDinhMuc,
            ghiChuDinhMuc: noteDinhMuc,
            id: idDinhMuc,
            donVi_VI: donVi_VI,
            tenCv_EN: tenCv_EN,
            donVi_EN: donVi_EN,
            idUser: idUser
        }


        try {

            var result = await axiosInstance.post(`handleApproveContribute`, data);

            if (result.status === 200) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.message,
                    error: null
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },

    async deleteDmContributeWithId(context, { iddm = '', idUser = '' }) {
        try {
            let data = {
                iddm: iddm,
                idUser: idUser
            }
            var result = await axiosInstance.post(`handleDeleteNoteDmContribute/${data.iddm}`, data);
            if (result.status === 200) {
                //if (result.data.success) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.message,
                    error: null
                }
                //}

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },
    /* gọi api cho  báo giá */
   
    /* CALL API DO KHÁCH HÀNG NHẬP */
   

    /* gọi api cho verify email */
    async resendVerifyEmail() {


        try {
            // dùng kiểu này thì theo cấu hình của api.service moi dc dùng kieu cua axios loi do token không đúng
            JwtService.getToken();
            ApiService.setHeader();
            var result = ApiService.post("email/verification-notification")

            //var result = await axiosInstance.post('email/verification-notification', config);
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    /* gọi api cho phần phân quyền */

    async getListDataRole({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }


        try {

            var result = await axiosInstance.get('/getDataTableRole', config);
            //console.log("result", result);
            commit('SET_LIST_DATAUSER', result.data.user);
            commit('SET_LIST_DATAROLE', result.data.role);
            commit('SET_LIST_DATA_ROLE_OF_ALL_USER', result.data.role_of_all_user);

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListDataUser({ commit }) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }

        try {

            var result = await axiosInstance.get('/getDataTableUser', config);
            //console.log("result", result);
            commit('SET_LIST_DATAUSER', result.data.user);
            commit('SET_LIST_DATAROLE', result.data.role);
            commit('SET_LIST_DATA_PERMISSION', result.data.permission);
            commit('SET_LIST_DATA_ROLE_OF_ALL_USER', result.data.role_of_all_user);
            commit('SET_LIST_DATA_PERMISSION_OF_ALL_USER', result.data.permission_of_all_user);
            return result;
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    toggleForm({ commit }) {
        // console.log("Action toggleForm");
        commit('TOGGLE_FORM');
    },

    async handleAddNewUser(context, { name = '', email = '', password = '', role_id = null, permission_id = null }) {

        let data = {
            name: name,
            email: email,
            password: password,
            role_id: role_id,
            permission_id: permission_id,
        }
 

        try {

            var result = await axiosInstance.post(`createUser`, data);
            // console.log('result', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    async handleAddNewRole(context, { name = '', slug = '' }) {

        let data = {
            name: name,
            slug: slug,

        }


        try {

            var result = await axiosInstance.post(`createRole`, data);
            //console.log('result', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    return {
                        ok: true,
                        data: result.data.user,
                        error: null
                    }
                }
                if (result.data.success === false) {
                    return {
                        ok: false,
                        error: result.data.message,
                    }
                }
            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },

    // dung cai nay cho chinh sua user
    handleEdit({ commit }, userSelected) {
        commit('HANDLE_EDIT', userSelected);
    },

    handleEditRole({ commit }, roleSelected) {
        commit('HANDLE_EDIT_ROLE', roleSelected);
    },
    // call api cho update thong tin user
    async handleEditUserById({ commit }, { name = '', email = '', password = '', role_id = null, permission_id = null, idUser = '' }) {
        let data = {
            name: name,
            email: email,
            password: password,
            role_id: role_id,
            permission_id: permission_id,
            idUser: idUser
        }

        try {

            var result = await axiosInstance.post(`updateUser/${data.idUser}`, data);
            //console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    commit('TOGGLE_FORM');
                    // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
        // dispatch('toggleForm')


    },


    async handleEditRoleById({ commit }, { slug = '', name = '', role_id = '' }) {
        let data = {
            name: name,
            slug: slug,
            role_id: role_id,
        }

        try {

            var result = await axiosInstance.post(`updateRole/${data.role_id}`, data);
            // console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);
                    commit('TOGGLE_FORM');
                    // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
        // dispatch('toggleForm')


    },


    async handleDeleteRoleById(context, idRole) {

        try {

            var result = await axiosInstance.post(`deleteRole/${idRole}`);
            //console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);

                    // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
        // dispatch('toggleForm')


    },

    async handleDeleteUserById(context, idUser) {

        try {

            var result = await axiosInstance.post(`deleteUser/${idUser}`);
            //console.log('handleEditUserById', result)
            if (result.status === 200) {
                if (result.data.success) {
                    //commit('SET_USER_INFO', result.data.user);

                    // commit('CHANGE_TASKS', listTaskClone);
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
        // dispatch('toggleForm')


    },



    /* hàm sử lý search cho bao gia va dinh mức */

    handleSearch({ commit }, stringSearch) {
        commit('HANDLE_SEARCH', stringSearch)
    },

    handleSearchInput({ commit }, stringSearch) {
        commit('HANDLE_SEARCH', stringSearch)
    },

    handleBlurSearch({ commit }, stringSearch) {
        commit('HANDLE_BLUR_SEARCH', stringSearch)
    },


    /* hàm api cho loin và logout */

    async login({ commit, dispatch }, { email = '', password = '' }) {
        try {
            let data = {
                email: email,
                password: password
            }
            var result = await axiosInstance.post('/login', data);


            // commit('SET_LOADING', false);
            if (result.status === 200) {
                let resultUser = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO', { user: resultUser.data, token: result.data.token });
                let users = {
                    info: resultUser.data,
                    token: result.data.token
                }
                commit(SET_AUTH, users, { root: true });// dùng cú  pháp này để commit 1 mutation từ 1 module khác

                return {
                    ok: true,
                    error: null,
                    data: result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, data) {
        // commit('SET_LOADING', true);
        console.log("data = ", data);
        try {

            var result = await axiosInstance.post('/register', data);
            // commit('SET_LOADING', false);
            if (result.status === 200 && result.data.token) {
                let resultUser = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO', { user: resultUser.data, token: result.data.token });
                return {
                    ok: true,
                    error: null,
                    data: result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.errors
                }
            }

        } catch (error) {
            console.log('error');

            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return null
    },

    async getUserWithId(context, token = '') {
        var config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/details', config);
            if (result.status === 200) {
                context.commit('SET_USER_INFO', result.data.user);
                context.commit(SET_AUTH, result.data, { root: true });
                context.commit(SET_PERSONAL_INFO, result.data, { root: true });
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },


    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);

            if (tokenLocal) {
                let promiseUser = await dispatch('getUserWithId', tokenLocal);
                if (promiseUser.ok) {
                    let data = {
                        user: promiseUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }

        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },

    /* API CHO SETTING SYSTEM ADMIN */
    async changeEnvSystem(context, { data = '' }) {
        let dataSend = {
            data: data
        }
        try {

            var result = await axiosInstance.post('/changeEnvironment', dataSend);
            //console.log('result',result);
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    /* API BAT TAT HE THONG */

    async offSystem() {

        try {

            var result = await axiosInstance.post('/offSystem');
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async onSystem() {

        try {

            var result = await axiosInstance.post('/onSystem');
            return result

            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    /* RESET PASSWORD */
    // gửi e mail xác nhận thay đổi mật khẩu
    async sendEmailResetPW(context, email = '') {
        let dataSend = {
            email: email
        }
        try {

            var result = await axiosInstance.post('/sendEmailResetPassword', dataSend);
            return result

        } catch (error) {
            console.log("error", error);
        }
    },
    //thay đổi mật khẩu
    async changePass(context, { email = '', password = '', token = '' }) {
        let dataSend = {
            email: email,
            password: password,
            token: token
        }
        try {

            var result = await axiosInstance.post('/changePass', dataSend);
            return result

        } catch (error) {
            console.log("error", error);
        }
    },
    /* lay photo cho user */
    async getUrlAvatar(context, idUser = '') {
        try {
            var result = await axiosInstance.get(`/getPathFile/${idUser}`);
            context.commit(SET_PERSONAL_PHOTO, result.data, { root: true });
            return result

        } catch (error) {
            console.log("error", error);
        }
    },
    /* thay avatar */
    async updateProfile({ commit }, { name = '', objFile = null }) {
        try {
            let bodyFormData = new FormData();
            bodyFormData.append('name', name);

            if (objFile) {
                bodyFormData.append('objFile', objFile);
            }
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            }
            // console.log('updateProfile',localStorage.getItem(CONFIG_ACCESS_TOKEN))
            let result = await axiosInstance.post('/upload', bodyFormData, config);
            if (result.status === 200) {
                commit('SET_USER_INFO', result.data.user);
                commit(SET_AUTH, result.data, { root: true });
                commit(SET_PERSONAL_INFO, result.data, { root: true });
                return {
                    ok: true,
                    user: result.data.user
                }
            } else {
                return {
                    ok: false,
                    error: result.data.message
                }
            }

        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async changPassUser(context, { current_password = '', new_password = '', verify_password = '' }) {
        try {
            let dataSend = {
                current_password: current_password,
                new_password: new_password,
                verify_password: verify_password
            }
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            }
            // console.log('updateProfile',localStorage.getItem(CONFIG_ACCESS_TOKEN))
            let result = await axiosInstance.post('/changePassAfterLogin', dataSend, config);
            return result;

        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    

     /* ACTION CHO TAO TASK */
     async ActionCreateTask(context, { Ten = '', keHoach = '', thucHien = '', nguoiDeXuat = '',
     nguoiPhoiHop = '', moTaTask = '', mucDo = '', ketQua = '', tinhTrang = '', luuY = '' }) {
       
        let data = {
            Ten : Ten,
            keHoach : keHoach?keHoach:null,
            thucHien : thucHien?thucHien:null,
            nguoiDeXuat : nguoiDeXuat,
            nguoiPhoiHop : nguoiPhoiHop,
            moTaTask : moTaTask,
            mucDo : mucDo,
            ketQua : ketQua,
            tinhTrang : tinhTrang,
            luuY : luuY,
            
        }

        console.log(data);   
        try {

            var result = await axiosInstance.post(`createTask`, data);

            if (result.status === 200) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.msg,
                    error: null
                }

            }
            return {
                ok: false,
                error: result.data.message
            }
        } catch (error) {

            return {
                ok: false,
                error: error.message
            }
        }
    },
    async getListTaskHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/showTask?page=' + page, config);
            context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
}