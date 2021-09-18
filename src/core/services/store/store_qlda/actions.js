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
    async ActionCreateTask(context, { Ten = '', keHoach = '', thucHien = '', nguoiDeXuat = '',duanLienQuan='',
        nguoiPhoiHop = '', moTaTask = '', mucDo = '', ketQua = '', tinhTrang = '', luuY = '' }) {

        let data = {
            Ten: Ten,
            keHoach: keHoach ? keHoach : null,
            thucHien: thucHien ? thucHien : null,
            nguoiDeXuat: nguoiDeXuat,
            nguoiPhoiHop: nguoiPhoiHop,
            moTaTask: moTaTask,
            mucDo: mucDo,
            ketQua: ketQua,
            tinhTrang: tinhTrang,
            luuY: luuY,
            duanLienQuan:duanLienQuan

        }
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

    async ActionUpdateTask(context, { Ten = '', keHoach = '', thucHien = '', nguoiDeXuat = '',duanLienQuan='',
    nguoiPhoiHop = '', moTaTask = '', mucDo = '', ketQua = '', tinhTrang = '', luuY = '',idTask='' }) {

    let data = {
        Ten: Ten,
        keHoach: keHoach ? keHoach : null,
        thucHien: thucHien ? thucHien : null,
        nguoiDeXuat: nguoiDeXuat,
        nguoiPhoiHop: nguoiPhoiHop,
        moTaTask: moTaTask,
        mucDo: mucDo,
        ketQua: ketQua,
        tinhTrang: tinhTrang,
        luuY: luuY,
        duanLienQuan:duanLienQuan

    }
    try {

        var result = await axiosInstance.post(`updateTask/${idTask}`, data);

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
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getAllTask() {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getAllTask', config);
            return result
        } catch (error) {
            console.log("error", error);
        }
    },
    
    async getTaskWithId(context, task_id) {

        try {

            var result = await axiosInstance.get(`/getTaskById/${task_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyTaskWithId(context, Task_id) {
        try {
            var result = await axiosInstance.post(`/destroyTask/${Task_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    /* BAO CÁO */
    async getTimeBaoCao(context, { kind = '',site='' }) {

        let data = {
            kind: kind,
            site:site
        }
        try {
            var result = await axiosInstance.post(`getTimeBaoCao`, data);

            if (result.status === 200) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.data,
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
    async getListReport(context,{ nameProj = '' , time = ''}) {
        let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
        var config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenLocal,
            }
        }
        try {

            var result = await axiosInstance.get(`/getContentBaoCao/${time}/${nameProj}`, config);
            //commit('SET_LIST_POSTS',result.data)
            return result;
        } catch (error) {
            console.log("error", error);
        }
    },
    async getNameProject(context, { kind = '' }) {
        let data = {
            kind: kind,
        }
        try {
            var result = await axiosInstance.post(`getNameProject`,data);

            if (result.status === 200) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.data,
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

    async deleteReport(context, idReport = '') {
        let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
        var config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenLocal,
            }
        }
        try {

            var result = await axiosInstance.delete(`/post/bcday/${idReport}`, config);
            //commit('SET_LIST_POSTS',result.data)
            return result;
        } catch (error) {
            console.log("error", error);
        }
    },
    /* api vừa gửi data vừa gửi tolen lêm serve. token dể sau cùng trong danh sách đối số */
    async updateReport(context, {contentJson = '',idReport = '',dateBaocao = ''
    ,tenDuan = '',diaDiem = '',chuDauTu = '',banQuanLy=''}) {
        let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
        let data = {
            contentJson:contentJson,
            dateBaocao:dateBaocao,
            tenDuan:tenDuan,
            diaDiem:diaDiem,
            chuDauTu:chuDauTu,
            banQuanLy:banQuanLy,
            idReport:idReport,
          }
        var config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenLocal,
            }
        }
        try {

            var result = await axiosInstance.patch(`/post/bcday/${idReport}`, data,config);
            //commit('SET_LIST_POSTS',result.data)
            return result;
        } catch (error) {
            console.log("error", error);
        }
    },
 
    /* ACTION CHO TAO HO SƠ */
    async ActionCreateFile(context, { 
        duAn ='',
        loaiHoSo ='',
        kyHieuHoSo='',
        tenHoSo ='',
        soLuong ='',
        ngayNhan ='',
        ngayTra ='',
        lanKiemTra ='',
        ketQua ='',
        lyDoKhongDat ='',
        noiDungThayDoiTk ='',
        nguyenNhanThayDoiTk ='',
        nguoiPheDuyet ='',
        yKienTVGS ='',
    }) {

        let data = {
            duAn:duAn,                           
            loaiHoSo:loaiHoSo,                           
            tenHoSo:tenHoSo,                         
            soLuong:soLuong,                           
            ngayNhan:ngayNhan,                           
            ngayTra:ngayTra,                           
            lanKiemTra:lanKiemTra,                           
            ketQua:ketQua,                            
            lyDoKhongDat:lyDoKhongDat,                           
            noiDungThayDoiTk:noiDungThayDoiTk,                         
            nguyenNhanThayDoiTk:nguyenNhanThayDoiTk,                            
            nguoiPheDuyet:nguoiPheDuyet,                           
            yKienTVGS:yKienTVGS,                       
            kyHieuHoSo:kyHieuHoSo,                       
            
        }
        try {

            var result = await axiosInstance.post(`createFile`, data);

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

    async ActionUpdateFile(context, { 
        duAn ='',
        loaiHoSo ='',
        kyHieuHoSo='',
        tenHoSo ='',
        soLuong ='',
        ngayNhan ='',
        ngayTra ='',
        lanKiemTra ='',
        ketQua ='',
        lyDoKhongDat ='',
        noiDungThayDoiTk ='',
        nguyenNhanThayDoiTk ='',
        nguoiPheDuyet ='',
        yKienTVGS ='',
        idFile = ''
    }) {

        let data = {
            duAn:duAn,                           
            loaiHoSo:loaiHoSo,                           
            tenHoSo:tenHoSo,                         
            soLuong:soLuong,                           
            ngayNhan:ngayNhan,                           
            ngayTra:ngayTra,                           
            lanKiemTra:lanKiemTra,                           
            ketQua:ketQua,                            
            lyDoKhongDat:lyDoKhongDat,                           
            noiDungThayDoiTk:noiDungThayDoiTk,                         
            nguyenNhanThayDoiTk:nguyenNhanThayDoiTk,                            
            nguoiPheDuyet:nguoiPheDuyet,                           
            yKienTVGS:yKienTVGS,                       
            kyHieuHoSo:kyHieuHoSo,                       
            idFile:idFile
        }
        try {

            var result = await axiosInstance.post(`updateFile/${idFile}`, data);

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
    async getListFileHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/showFile?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getFileWithId(context, file_id) {

        try {

            var result = await axiosInstance.get(`/getFileById/${file_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyFileWithId(context, File_id) {
        try {
            var result = await axiosInstance.post(`/destroyFile/${File_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getAllFile() {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getAllFile', config);
            return result
        } catch (error) {
            console.log("error", error);
        }
    },
     /* ACTION CHO TAO HỢP ĐỒNG */
     async ActionCreateContract(context, { 
        tenHopDong ='',
        duAn ='',
        giaTriHD ='',
        nhanSuLienQuan ='',
        batDau ='',
        ketThuc ='',
        donVi ='',
        khoiLuong ='',
       
    }) {

        let data = {
            tenHopDong:tenHopDong,                           
            duAn:duAn,                           
            giaTriHD:giaTriHD,                         
            nhanSuLienQuan:nhanSuLienQuan,                           
            batDau:batDau,                           
            ketThuc:ketThuc,                           
            donVi:donVi,                           
            khoiLuong:khoiLuong,                            
                                

        }
        try {

            var result = await axiosInstance.post(`createContract`, data);

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

    async ActionUpdateContract(context, { 
        tenHopDong ='',
        duAn ='',
        giaTriHD ='',
        nhanSuLienQuan ='',
        batDau ='',
        ketThuc ='',
        donVi ='',
        khoiLuong ='',
        idContract =''
    }) {

        let data = {
            tenHopDong:tenHopDong,                           
            duAn:duAn,                           
            giaTriHD:giaTriHD,                         
            nhanSuLienQuan:nhanSuLienQuan,                           
            batDau:batDau,                           
            ketThuc:ketThuc,                           
            donVi:donVi,                           
            khoiLuong:khoiLuong,                            
        }
        try {

            var result = await axiosInstance.post(`updateContract/${idContract}`, data);

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
    async getListContractHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/showContract?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getContractWithId(context, Contract_id) {

        try {

            var result = await axiosInstance.get(`/getContractById/${Contract_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyContractWithId(context, Contract_id) {
        try {
            var result = await axiosInstance.post(`/destroyContract/${Contract_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getAllContract() {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getAllContract', config);
            return result
        } catch (error) {
            console.log("error", error);
        }
    },
     /* ACTION CHO TAO DỰ ÁN */
     async ActionCreateProject(context, { 
        tenDuAn ='',
        maDuAn ='',
        tenCdt ='',
        moTaDuAn ='',
        ngayBatDau ='',
        ngayKetThuc ='',
        ngayKetThucThucTe ='',
        trangThai ='',
        nhanSuChinh ='',
        nhanSuLienQuan ='',
       
    }) {

        let data = {
            tenDuAn:tenDuAn,                           
            maDuAn:maDuAn,                           
            tenCdt:tenCdt,                         
            moTaDuAn:moTaDuAn,                           
            ngayBatDau:ngayBatDau,                           
            ngayKetThuc:ngayKetThuc,                           
            ngayKetThucThucTe:ngayKetThucThucTe,                           
            trangThai:trangThai,                            
            nhanSuChinh:nhanSuChinh,                            
            nhanSuLienQuan:nhanSuLienQuan,                            
        }
        try {

            var result = await axiosInstance.post(`createProject`, data);

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

    async ActionUpdateProject(context, { 
        tenDuAn ='',
        maDuAn ='',
        tenCdt ='',
        moTaDuAn ='',
        ngayBatDau ='',
        ngayKetThuc ='',
        ngayKetThucThucTe ='',
        trangThai ='',
        nhanSuChinh ='',
        nhanSuLienQuan ='',
        idProj =''
    }) {

        let data = {
            tenDuAn:tenDuAn,                           
            maDuAn:maDuAn,                           
            tenCdt:tenCdt,                         
            moTaDuAn:moTaDuAn,                           
            ngayBatDau:ngayBatDau,                           
            ngayKetThuc:ngayKetThuc,                           
            ngayKetThucThucTe:ngayKetThucThucTe,                           
            trangThai:trangThai,                            
            nhanSuChinh:nhanSuChinh,                            
            nhanSuLienQuan:nhanSuLienQuan,                            
        }
        try {

            var result = await axiosInstance.post(`updateProject/${idProj}`, data);

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
    async getListProjectHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/showProject?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getListProjectName() {

        try {

            var result = await axiosInstance.get('/getProjectName');
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getProjectWithId(context, Project_id) {

        try {

            var result = await axiosInstance.get(`/getProjectById/${Project_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyProjectWithId(context, Project_id) {
        try {
            var result = await axiosInstance.post(`/destroyProject/${Project_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getAllProjectMana() {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getAllProjectMana', config);
            return result
        } catch (error) {
            console.log("error", error);
        }
    },
    
     /* ACTION CHO TAO NHAN SU */
     async ActionCreateInfomationEmploy(context, { 
        codeEmploy ='',
        userNameEmploy ='',
        nameEmploy ='',
        teleEmploy ='',
        emailEmploy ='',
        genderEmploy ='',
        birthdayEmploy ='',
        placeOfBirthEmploy ='',
        homeTownEmploy ='',
        permanentResidenceEmploy ='',
        currentAccommodationEmploy ='',
        majorsEmploy ='',
        trainingPlacesEmploy ='',
        nationEmploy ='',
        religionEmploy ='',
        qualificationEmploy ='',
        graduationYearEmploy ='',
        IDCardEmploy ='',
        dateRangeEmploy ='',
        issuedByEmploy ='',
        accountNumberEmploy ='',
        bankEmploy ='',
        branchBankEmploy ='',
        practicingCertificateTVGS ='',
        practicingCertificateTVGSEffectiveDate ='',
        practicingCertificateATLD ='',  
        practicingCertificateTVTK ='',
        practicingCertificateOther ='',
        DateOfReceivingTheJob ='',
        Department ='',
        Position ='',
        socialInsurance ='',
        typeOfContract ='',
        workStatus ='',
        socialInsuranceNumber ='',
        dayOff ='',
        socialInsurancePremium ='',
        descriptionEmploy ='',
    }) {

        let data = {
            codeEmploy:codeEmploy,                           
            userNameEmploy:userNameEmploy,                           
            nameEmploy:nameEmploy,                         
            teleEmploy:teleEmploy,                           
            emailEmploy:emailEmploy,                           
            genderEmploy:genderEmploy,                           
            birthdayEmploy:birthdayEmploy,                           
            placeOfBirthEmploy:placeOfBirthEmploy,                            
            homeTownEmploy:homeTownEmploy,                            
            permanentResidenceEmploy:permanentResidenceEmploy,                            
            currentAccommodationEmploy:currentAccommodationEmploy,                            
            majorsEmploy:majorsEmploy,                            
            trainingPlacesEmploy:trainingPlacesEmploy,
            nationEmploy:nationEmploy,                           
            religionEmploy:religionEmploy,                           
            qualificationEmploy:qualificationEmploy,                         
            graduationYearEmploy:graduationYearEmploy,                           
            IDCardEmploy:IDCardEmploy,                           
            dateRangeEmploy:dateRangeEmploy,                           
            issuedByEmploy:issuedByEmploy,                           
            accountNumberEmploy:accountNumberEmploy,                            
            bankEmploy:bankEmploy,                            
            branchBankEmploy:branchBankEmploy,                            
            practicingCertificateTVGS:practicingCertificateTVGS,                            
            practicingCertificateTVGSEffectiveDate:practicingCertificateTVGSEffectiveDate,                            
            practicingCertificateATLD:practicingCertificateATLD, 
            practicingCertificateTVTK:practicingCertificateTVTK,                           
            practicingCertificateOther:practicingCertificateOther,                           
            DateOfReceivingTheJob:DateOfReceivingTheJob,                         
            Department:Department,                           
            Position:Position,                           
            socialInsurance:socialInsurance,                           
            typeOfContract:typeOfContract,                           
            workStatus:workStatus,                            
            socialInsuranceNumber:socialInsuranceNumber,                            
            dayOff:dayOff,                            
            socialInsurancePremium:socialInsurancePremium,                            
            descriptionEmploy:descriptionEmploy,                            
        }
        try {

            var result = await axiosInstance.post(`createinfomationEmploy`, data);

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
    async ActionUpdateInfomationEmploy(context, { 
        codeEmploy ='',
        userNameEmploy ='',
        nameEmploy ='',
        teleEmploy ='',
        emailEmploy ='',
        genderEmploy ='',
        birthdayEmploy ='',
        placeOfBirthEmploy ='',
        homeTownEmploy ='',
        permanentResidenceEmploy ='',
        currentAccommodationEmploy ='',
        majorsEmploy ='',
        trainingPlacesEmploy ='',
        nationEmploy ='',
        religionEmploy ='',
        qualificationEmploy ='',
        graduationYearEmploy ='',
        IDCardEmploy ='',
        dateRangeEmploy ='',
        issuedByEmploy ='',
        accountNumberEmploy ='',
        bankEmploy ='',
        branchBankEmploy ='',
        practicingCertificateTVGS ='',
        practicingCertificateTVGSEffectiveDate ='',
        practicingCertificateATLD ='',  
        practicingCertificateTVTK ='',
        practicingCertificateOther ='',
        DateOfReceivingTheJob ='',
        Department ='',
        Position ='',
        socialInsurance ='',
        typeOfContract ='',
        workStatus ='',
        socialInsuranceNumber ='',
        dayOff ='',
        socialInsurancePremium ='',
        descriptionEmploy ='',
        idEmploy=''
    }) {

        let data = {
            codeEmploy:codeEmploy,                           
            userNameEmploy:userNameEmploy,                           
            nameEmploy:nameEmploy,                         
            teleEmploy:teleEmploy,                           
            emailEmploy:emailEmploy,                           
            genderEmploy:genderEmploy,                           
            birthdayEmploy:birthdayEmploy,                           
            placeOfBirthEmploy:placeOfBirthEmploy,                            
            homeTownEmploy:homeTownEmploy,                            
            permanentResidenceEmploy:permanentResidenceEmploy,                            
            currentAccommodationEmploy:currentAccommodationEmploy,                            
            majorsEmploy:majorsEmploy,                            
            trainingPlacesEmploy:trainingPlacesEmploy,
            nationEmploy:nationEmploy,                           
            religionEmploy:religionEmploy,                           
            qualificationEmploy:qualificationEmploy,                         
            graduationYearEmploy:graduationYearEmploy,                           
            IDCardEmploy:IDCardEmploy,                           
            dateRangeEmploy:dateRangeEmploy,                           
            issuedByEmploy:issuedByEmploy,                           
            accountNumberEmploy:accountNumberEmploy,                            
            bankEmploy:bankEmploy,                            
            branchBankEmploy:branchBankEmploy,                            
            practicingCertificateTVGS:practicingCertificateTVGS,                            
            practicingCertificateTVGSEffectiveDate:practicingCertificateTVGSEffectiveDate,                            
            practicingCertificateATLD:practicingCertificateATLD, 
            practicingCertificateTVTK:practicingCertificateTVTK,                           
            practicingCertificateOther:practicingCertificateOther,                           
            DateOfReceivingTheJob:DateOfReceivingTheJob,                         
            Department:Department,                           
            Position:Position,                           
            socialInsurance:socialInsurance,                           
            typeOfContract:typeOfContract,                           
            workStatus:workStatus,                            
            socialInsuranceNumber:socialInsuranceNumber,                            
            dayOff:dayOff,                            
            socialInsurancePremium:socialInsurancePremium,                            
            descriptionEmploy:descriptionEmploy,                            
        }
        try {

            var result = await axiosInstance.post(`updateInfomationEmploy/${idEmploy}`, data);

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
    async getListInfomationEmployHasPaging(context, page) {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/showinfomationEmploy?page=' + page, config);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getEmployWithId(context, Employ_id) {

        try {

            var result = await axiosInstance.get(`/getInfomationEmployById/${Employ_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getEmployWithAcount(context, acount) {

        try {

            var result = await axiosInstance.get(`/getInfomationEmployByAcount/${acount}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyEmployWithId(context, Employ_id) {
        try {
            var result = await axiosInstance.post(`/destroyInfomationEmploy/${Employ_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async getAllInfomationEmploy() {

        var config = {
            headers: {
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        try {

            var result = await axiosInstance.get('/getAllInfomationEmploy', config);
            return result
        } catch (error) {
            console.log("error", error);
        }
    },
    
     /* BACKUP DỮ LIỆU */
     async getListFileBKHasPaging(context, page) {

        try {

            var result = await axiosInstance.get('/getListFile?page=' + page);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async deleteFile(context, file='') {

        try {

            var result = await axiosInstance.get(`/deleteFile/${file}`);
            return result 
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async downFile(context, file = '') {

        try {

            var result = await axiosInstance.get(`/downLoadFile/${file}`);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

     /* ACTION CHO TAO CHỨC DANH */
     async ActionCreatePosition(context, { 
        chucDanh ='',
        ghiChu ='',
        maChucDanh=''
    }) {

        let data = {
            chucDanh:chucDanh,                           
            ghiChu:ghiChu,                           
            maChucDanh:maChucDanh,                           
        }
        try {

            var result = await axiosInstance.post(`createPosition`, data);

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

    async ActionUpdatePosition(context, { 
        chucDanh ='',
        ghiChu ='',
        maChucDanh='',
        idPosition =''
    }) {

        let data = {
            chucDanh:chucDanh,                           
            ghiChu:ghiChu,   
            maChucDanh:maChucDanh,                         
        }
        try {

            var result = await axiosInstance.post(`update/${idPosition}`, data);

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
    async getListPositionHasPaging(context, page) {

        try {

            var result = await axiosInstance.get('/showPosition?page=' + page);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },

    async getPositionWithId(context, Position_id) {
        try {
            var result = await axiosInstance.get(`/getPositionById/${Position_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
    async destroyPositionWithId(context, Position_id) {
        try {
            var result = await axiosInstance.post(`/destroyPosition/${Position_id}`);
            // context.commit('SET_LIST_POST', result.data.data);
            return result
            //console.log("error",result.data.data);
        } catch (error) {
            console.log("error", error);
        }
    },
}