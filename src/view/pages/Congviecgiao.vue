<template>
  <div class="header-page-giaocv">
           <!-- <div>
    <select2 v-model="myValue" :options="myOptions" multiple />

  </div> -->
    <!-- <div>
    <multiselect
      v-model="myValue"
      multiple
      placeholder="Pick some"
      :custom-label="nameWithLang"
      label="name"
      track-by="id"
      :options="myOptions">
    </multiselect>
  </div> -->
    <div class="block-select">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div class="select-cbb">
            <b-form-select v-model="selectedPersion" :options="persion">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Theo nhân sự --</b-form-select-option
                >
              </template>
            </b-form-select>
      </div>

      <div class="select-cbb">
         <b-form-select v-model="selectedPriorityLevel" :options="priority_level">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Mức độ ưu tiên --</b-form-select-option
                >
              </template>
            </b-form-select>
      </div>

      <div class="select-cbb">
       <b-form-select v-model="selectedJobStatus" :options="job_status">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Tình trạng công việc --</b-form-select-option
                >
              </template>
            </b-form-select>
      </div>
      <div class="select-cbb">
            <b-form-select v-model="selectedWorkResults" :options="work_results">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Kết quả công việc --</b-form-select-option
                >
              </template>
            </b-form-select>
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

 <div  class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
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
                <th style="display:none">Id</th>
                <th>Tên</th>
                <th>Kế hoạch</th>
                <th>Thực hiện</th>
                <th>Người đề xuất</th>
                <th>Người phối hợp</th>
                <th>Yêu cầu công việc</th>
                <th>Ưu tiên</th>
                <th>Kết quả</th>
                <th>Tình trạng</th>
                <th>Lưu ý</th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrAssignedWork">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display:none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      <!-- item.id !== null ? item.id : "null" -->
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      <!-- item.maVatTu !== null ? item.maVatTu : "null" -->
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      <!-- item.tenVatTu !== null ? item.tenVatTu : "null" -->
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      <!-- item.donVi !== null ? item.donVi : "null" -->
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      <!-- item.giaVatTu !== null ? item.giaVatTu : "null" -->
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      <!-- item.khuVuc !== null ? item.khuVuc : "null" -->
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      <!-- item.thoiDiem !== null ? item.thoiDiem : "null" -->
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      <!-- item.nguon !== null ? item.nguon : "null" -->
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      <!-- item.ghiChu !== null ? item.ghiChu : "null" -->
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      <!-- item.tinh !== null ? item.tinh : "null" -->
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      <!-- item.tacGia !== null ? item.tacGia : "null" -->
                    }}</span>
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
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data() {
    return {
       myValue: null,
      myOptions: [{id: 'key', text: 'value'}, {id: 'key1', text: 'value1'}, {id: 'key2', text: 'value2'}],
      //myOptions:['list', 'of', 'options'],
      rows: 100,
      dataArrAssignedWork:[],
      selectedPersion: null, // Array reference
      persion: [
        
      ],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "1", text: "Quan trọng và khẩn cấp" },
        { value: "2", text: "Quan trọng nhưng không khẩn cấp" },
        { value: "3", text: "Khẩn cấp nhưng không quan trọng" },
        { value: "4", text: "Không quan trọng và không khẩn cấp" },
      ],
       selectedJobStatus: null, // Array reference
      job_status: [
        { value: "1", text: "Chưa khởi động" },
        { value: "2", text: "Đang thực hiện" },
        { value: "3", text: "Quá hạn" },
        { value: "4", text: "Đã phê duyệt" },
      ],
       selectedWorkResults: null, // Array reference
      work_results: [
        { value: "1", text: "Kết quả công việc" },
        { value: "2", text: "Đã hoàn thành" },
        { value: "3", text: "Chưa hoàn thành" },

      ],
    };
  },
  watch:{
    myValue: function (old) {
      console.log('old',old)
    }
  },
  methods: {
    updateMultiValue (value) {
      console.log('value',value)
      this.myValue = value
    },
    nameWithLang ({ text }) {
      return `${text}`
    },
    dataArr(page) {
      let thoidiem = "";
      if (!this.isMonthDisabledView) {
        thoidiem = this.selectedThangView;
      }
      if (!this.isQuyDisabledView) {
        thoidiem = this.selectedQuyView;
      }
      if (!this.isDayDisabledView) {
        thoidiem = this.selectedDayView;
      }
      var data = {
        check: 0,
        user_id: this.currentUserPersonalInfo.user.id,
        idUserView: this.currentUserPersonalInfo.user.id,
        tinh: this.selectedTinhView,
        khuvuc: this.selectedKhuVucView,
        thoidiem: thoidiem,
        page: page,
      };
      this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then(
        (response) => {
          this.dataArrBaoGia = response.data.pagi.data;
            this.pagination = response.data.pagi;
            this.rows = response.data.pagi.total;
        }
      );
    },
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.search-congv input[type="search"] {
  height: 34px;
}

.btn-add-cv {
  height: 38px;
  padding-top: 0;
  padding-bottom: 0;
}

.block-select {
  display: flex;
  justify-content: space-between;
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
	height: 34px;
}
.select-cbb{
  max-width: 200px;
}
.header-page-giaocv {
  margin-left: 10px;
  margin-right: 10px;
}
.table-cv{
  background-color: #fff;
}
.permission .v-menu__content {
  position: absolute;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  border-radius: 4px;
  left: 1px !important;
  top: 135px !important;
}
/* .btn-secondary:hover {
  color: #fff;
  background-color: red;
  border-color: #6c757d;
}
.add-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}

.btn-add-cv {
  position: absolute;
  left: 10px;
}
.select-name .btn-secondary {
  background-color: #fff;
  color: #000;
}
.select-name {
  position: absolute;
  left: 10%;
}
.select-mucdo {
  position: absolute;
  left: 25%;
}
.select-tinhtrang {
  position: absolute;
  left: 45%;
}
.select-ketqua {
  position: absolute;
  left: 65%;
}
.search-congv {
  position: absolute;
  right: 0;
}
.table-cv {
  position: absolute;
  top: 60px;
  width: 100%;
} */
</style>