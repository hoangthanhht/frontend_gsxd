
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN),
    listDataDM:[],
    listDataDmContribte:[],
    listDataBGia:[],
    listDataUser:[],
    listDataRole:[],// mảng chứa tất cả cấc role trong bảng role
    listDataPermission:[],// mảng chứa tất cả cấc role trong bảng per
    listDataRoleOfAllUser:[],// mảng chứa tất cả slug của tất cả user
    listDataPermissionOfAllUser:[],// mảng chứa tất cả slug của tất cả user
    listDataBGiaGuest:[],// mảng chứa bao giá cho approve
    listDataBGiaGuestViewSelf:[],// mảng chứa bao giá cảu nguoi dùng dang login
    listDataBGiaGuestViewOtherPs:[],// mảng chứa bao giá cảu nguoi khac
    listPost:[],//list chứa bài post theo paging
    currentUser: null, // Login
    users: {}, 
    stringSearch:'',
    isShowForm: false,
    userSelected: null,
    roleSelected: null,
    addressServe:'http://127.0.0.1:8000'
}