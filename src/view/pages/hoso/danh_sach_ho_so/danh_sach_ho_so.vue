<template>
  <div class="danh-sach-ho-so">
    <div class="div-fillter">
     <div class="btn-add-cv">
       <router-link 
       to="/themhoso"
       tag="b-button"
       class="mb-2 add-cv icon-tvgs pt-3 pb-3">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
       </router-link>
      </div>

      <div class="select-cbb">
        <b-form-select
          v-model="selectedTimeCreate"
          :options="time_create"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Thời gian tạo hồ sơ --</b-form-select-option
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
              >-- Tình trạng hồ sơ --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <multiselect
          v-model="selectedKindFile"
          placeholder="Loại hồ sơ"
          :custom-label="custom_label_persion"
          label="name"
          track-by="id"
          selectLabel="Ấn enter để chọn"
          deselectLabel="Ấn enter để bỏ chọn"
          :options="kindfile"
        >
        </multiselect>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs">
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

     <div class="card-body pt-0 pb-3">
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
                <th>Tên hồ sơ</th>
                <th>Số lượng</th>
                <th>Lần kiểm tra</th>
                <th>Ngày</th>
                <th>Kết quả</th>
                <th>Người kiểm tra</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrFile">
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
                      item.tenHoSo !== null ? item.tenHoSo : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.soLuong !== null ? item.soLuong : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      item.lanKiemTra !== null ? item.lanKiemTra : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                       handleGetDate(index) !== null ?  handleGetDate(index) : ""
                    }}
                    </span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      item.ketQua !== null ? item.ketQua : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.nguoiPheDuyet !== null ? item.nguoiPheDuyet : "null"
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
      currentPage: 1,
      rows: 100,
      dataArrFile: [],
      selectedKindFile: null, // Array reference
      kindfile: [ 
         { id: "1", text: "Hồ sơ nghiệm thu công việc" },
        { id: "2", text: "Hồ sơ nghiệm thu vật liệu" },
        { id: "2", text: "Hồ sơ nghiệm thu thiết bị" },
        ],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "1", text: "Đã duyệt" },
        { value: "2", text: "Chưa duyệt" },
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
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách hồ sơ" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListFileHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/destroyFileWithId",
      
    ]),
  handleGetDate(index){
       let date = "";
      let arrTemp =[];
      if (this.dataArrFile[index].ngayNhan && this.dataArrFile[index].ngayTra) {
       arrTemp.push((this.dataArrFile[index].ngayNhan));
       arrTemp.push((this.dataArrFile[index].ngayTra));
        let arrTimeReceive = arrTemp[0].split("-");
        let arrTimeReturn = arrTemp[1].split("-");
        date =
          "Nhận : " +
          arrTimeReceive[2] +
          "/" +
          arrTimeReceive[1] +
          "/" +
          arrTimeReceive[0] +
          "," +
          "Trả: " +
          arrTimeReturn[2] +
          "/" +
          arrTimeReturn[1] +
          "/" +
          arrTimeReturn[0];
      }
      if (this.dataArrFile[index].ngayNhan && !this.dataArrFile[index].ngayTra) {
       arrTemp.push((this.dataArrFile[index].ngayNhan));
        let arrTimeReceive = arrTemp[0].split("-");
        date =
          "Nhận : " +
          arrTimeReceive[2] +
          "/" +
          arrTimeReceive[1] +
          "/" +
          arrTimeReceive[0] +
          "," +
          "Trả: " 
      }
      return date;

    },
  handleDelete(index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyFileWithId"](this.dataArrFile[index].id).
        then((res)=>
        {
          this.dataArr(this.currentPage);
          alert(res.data.msg)
        })
      }
  },
     handleEdit(index) {
      let id = this.dataArrFile[index].id
      let khhs = this.dataArrFile[index].kyHieuHoSo
      if(khhs==='hsnt'){
        this.$router.push(`/themhoso/${id}`);
      }
      if(khhs==='hstk'){
        this.$router.push(`/hosotke/${id}`);
      }
       if(khhs==='hsk'){
        this.$router.push(`/hosokhac/${id}`);
      }
      
    },
    custom_label_persion({ text }) {
      return `${text}`;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListFileHasPaging"](data).then((response) => {
        this.dataArrFile = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
  },

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.danh-sach-ho-so{
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
.select-cbb .custom-select{
	height: 43px;
}
.card-body {
 background-color: #fff;
}
.multiselect, .multiselect__input, .multiselect__single {
    font-size: 1rem !important;
}

.multiselect__placeholder {
    font-size: 1rem;
}
</style>