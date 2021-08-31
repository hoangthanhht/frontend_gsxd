<template>
  <div class="danh-sach-ho-so">
    <div class="div-fillter">
      <div class="btn-add-cv">
        <router-link
          to="/themhopdong"
          tag="b-button"
          class="mb-2 add-cv icon-tvgs pt-3 pb-3"
        >
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </router-link>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectedTimeCreate" :options="time_create">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Thời gian tạo hợp đồng --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select
          v-model="selectedPriorityLevel"
          :options="priority_level"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Tình trạng hợp đồng --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <multiselect
          v-model="selectedKindContract"
          placeholder="Loại hợp đồng"
          :custom-label="custom_label_persion"
          label="name"
          track-by="id"
          selectLabel="Ấn enter để chọn"
          deselectLabel="Ấn enter để bỏ chọn"
          :options="kindcontract"
        >
        </multiselect>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs cursor-pointer">
          <b-form-input v-model="search" type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon @click="handleSearch" icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon @click="handleReset" icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

   <div v-if="search||selectedKindContract"
    class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive table-striped">
          <table
            class="
              table
              table-head-custom
              table-vertical-center
              table-head-bg
              table-borderless
            "
          >
            <thead>
              <tr class="text-left">
                <!-- <th style="max-width: 50px" class="pl-7">
                  id
                </th> -->
                <th style="display: none">Id</th>
                <th>Tên hợp đồng</th>
                <th>loại hợp đồng</th>
                <th>dự Án</th>
                <th>giá trị hợp đồng</th>
                <th>nhán sự</th>
                <th>bắt đầu</th>
                <th>kết thúc</th>
                <th>đơn vị</th>
                <th>khối lượng</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in handleSearch()">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display: none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.tenHopDong !== null ? item.tenHopDong : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.loaiHopDong !== null ? item.loaiHopDong : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetPersion(handleSearch(),index)[0] !== null ? handleGetPersion(handleSearch(),index)[0] : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      item.giaTriHD !== null ? item.giaTriHD : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                         handleGetPersion(handleSearch(),index)[1] !== null
                          ?  handleGetPersion(handleSearch(),index)[1]
                          : ""
                      }}
                    </span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(),index)[0] !== null ? handleGetDate(handleSearch(),index)[0] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(),index)[1] !== null ? handleGetDate(handleSearch(),index)[1] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.donVi !== null ? item.donVi : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.khoiLuong !== null ? item.khoiLuong : "null"
                    }}</span>
                  </td>

                  <td>
                  <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-edit
                          text-white
                          pl-2
                          pr-2
                          mr-5
                          bg-green-400
                        "
                      ></i>
                      <i
                        @click="handleDelete(index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-rubbish-bin
                          text-white
                          pl-2
                          pr-2
                          bg-red-600
                        "
                      ></i>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <div v-else class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive table-striped">
          <table
            class="
              table
              table-head-custom
              table-vertical-center
              table-head-bg
              table-borderless
            "
          >
            <thead>
              <tr class="text-left">
                <!-- <th style="max-width: 50px" class="pl-7">
                  id
                </th> -->
                <th style="display: none">Id</th>
                <th>Tên hợp đồng</th>
                <th>loại hợp đồng</th>
                <th>dự Án</th>
                <th>giá trị hợp đồng</th>
                <th>nhán sự</th>
                <th>bắt đầu</th>
                <th>kết thúc</th>
                <th>đơn vị</th>
                <th>khối lượng</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrContract">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display: none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.tenHopDong !== null ? item.tenHopDong : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.loaiHopDong !== null ? item.loaiHopDong : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetPersion(dataArrContract,index)[0] !== null ? handleGetPersion(dataArrContract,index)[0] : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      item.giaTriHD !== null ? item.giaTriHD : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                         handleGetPersion(dataArrContract,index)[1] !== null
                          ?  handleGetPersion(dataArrContract,index)[1]
                          : ""
                      }}
                    </span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      handleGetDate(dataArrContract,index)[0] !== null ? handleGetDate(dataArrContract,index)[0] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      handleGetDate(dataArrContract,index)[1] !== null ? handleGetDate(dataArrContract,index)[1] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.donVi !== null ? item.donVi : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.khoiLuong !== null ? item.khoiLuong : "null"
                    }}</span>
                  </td>

                  <td>
                  <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-edit
                          text-white
                          pl-2
                          pr-2
                          mr-5
                          bg-green-400
                        "
                      ></i>
                      <i
                        @click="handleDelete(index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-rubbish-bin
                          text-white
                          pl-2
                          pr-2
                          bg-red-600
                        "
                      ></i>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <b-pagination
      v-model="currentPage"
      align="right"
      pills
      @page-click="dataArr(currentPage)"
      perPage="20"
      :total-rows="rows"
      size="lg"
    >
    </b-pagination>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
  components: { Multiselect },
  data() {
    return {
      search:'',
      currentPage: 1,
      rows: 100,
      dataArrContract: [],
      dataArrAllContract:[],
      selectedKindContract: null, // Array reference
      kindcontract: [
        { id: "1", text: "Hợp đồng trọn gói" },
        { id: "2", text: "Hợp đồng đơn giá cố định" },
        { id: "3", text: "Hợp đồng đơn giá thay đổi" },
      ],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "1", text: "Đã ký" },
        { value: "2", text: "Chưa ký" },
      ],
      selectedTimeCreate: null, // Array reference
      time_create: [
        { value: "1", text: "Tất cả" },
        { value: "2", text: "3 ngày" },
        { value: "2", text: "7 ngày" },
        { value: "2", text: "Tự chọn" },
      ],
    };
  },
   created() {
   this['storeqlda/getAllContract']().then((res)=>{
      this.dataArrAllContract = res.data
   });
   },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách hợp đồng" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListContractHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/getAllContract",
      "storeqlda/destroyContractWithId",
      
    ]),
  handleReset(){
    this.search = '';
    this.selectedTimeCreate = null;
    this.selectedKindContract = null;
    this.selectedPriorityLevel = null;
    },
      handleSearch(){
       if(this.search){
         let newArr = this.dataArrAllContract.filter(item => {
            let rs = false;
            if(item.tenHopDong && rs == false){
                rs = item.tenHopDong.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.loaiHopDong && rs == false) {
                rs = item.loaiHopDong.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.duAn && rs == false) {
                rs = item.duAn.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.nhanSuLienQuan && rs == false) {
                rs = item.nhanSuLienQuan.toLowerCase().includes(this.search.toLowerCase());
            }
               if(item.giaTriHD && rs == false) {
                rs = item.giaTriHD.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.khoiLuong && rs == false) {
                rs = item.khoiLuong.toLowerCase().includes(this.search.toLowerCase());
            }
            return rs;
        });
        return newArr;
       }
       else{
         if(this.selectedPriorityLevel||this.selectedTimeCreate||this.selectedKindContract
         ){
           let newArr = this.dataArrAllContract.filter(item => {
            if(this.selectedKindContract) {
              if(this.selectedKindContract == item.loaiHopDong){
                return item
              }
            }
            //  if(this.selectedJobStatus) {
            //   if(this.selectedJobStatus == item.tinhTrang){
            //     return item
            //   }
            // }
            //  if(this.selectedWorkResults) {
            //   if(this.selectedWorkResults == item.ketQua){
            //     return item
            //   }
            // }
            //  if(this.selectedPersion) {

            //    let rs = item.nguoiPhoiHop.toLowerCase().includes((JSON.stringify(this.selectedPersion)).toLowerCase());
            //     if(rs){
            //       console.log('item',item);
            //       return item
            //     }

            // }
           })
        return newArr
         }
       }
     },

     handleGetPersion(arr,index){
       let arrTemp =[];
        let persionProj = "";
      let persionDo = "";
       if (arr[index].duAn) {
          arrTemp = JSON.parse(arr[index].duAn);
          persionProj= arrTemp.text
       }
       if (arr[index].nhanSuLienQuan) {
          arrTemp = JSON.parse(arr[index].nhanSuLienQuan);
         for (var j in arrTemp) {
            if(persionDo=='') {
              persionDo = arrTemp[j].text
            }else{
              persionDo = persionDo + ',' + arrTemp[j].text
            }
         }
       }
        arrTemp =[];
      if(persionProj){
        arrTemp.push(persionProj);
      }
       if(persionDo){
         arrTemp.push(persionDo);
       }
      return arrTemp;
    },
    handleGetDate(arr,index) {
      let dateStart = "";
      let dateFinish = "";
      let arrTemp = [];
      if (arr[index].batDau) {
        let arrTimeStart = arr[index].batDau.split("-");
        dateStart =
          arrTimeStart[2] + "/" + arrTimeStart[1] + "/" + arrTimeStart[0];
      }
      if (arr[index].ketThuc) {
        let arrTimeFinish = arr[index].ketThuc.split("-");
        dateFinish =
          arrTimeFinish[2] + "/" + arrTimeFinish[1] + "/" + arrTimeFinish[0];
      }
        arrTemp =[];
      if(dateStart){
        arrTemp.push(dateStart);
      }
       if(dateFinish){
         arrTemp.push(dateFinish);
       }
      return arrTemp;
    },
    handleEdit(index) {
      let id = this.dataArrContract[index].id;
      this.$router.push(`/themhopdong/${id}`);
    },
      handleDelete(index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyContractWithId"](this.dataArrContract[index].id).
        then((res)=>
        {
          this.dataArr(this.currentPage);
          alert(res.data.msg)
        })
      }
  },
    custom_label_persion({ text }) {
      return `${text}`;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListContractHasPaging"](data).then((response) => {
        this.dataArrContract = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.danh-sach-ho-so {
  margin-left: 10px;
  margin-right: 10px;
}
/* .table-cv {
  text-align: center !important;
} */
.search-congv input[type="search"] {
  height: 43px;
}

.btn-add-cv {
  height: 40px;
  padding-top: 0;
  padding-bottom: 0;
}

.div-fillter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.select-duan {
  width: 200px;
  background-color: #fff;
}
.select-cbb .custom-select {
  height: 43px;
}
.card-body {
  background-color: #fff;
}
.multiselect,
.multiselect__input,
.multiselect__single {
  font-size: 1rem !important;
}

.multiselect__placeholder {
  font-size: 1rem;
}
</style>