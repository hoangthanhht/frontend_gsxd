<template>
  <div class="danh-sach-ho-so">
    <div class="div-fillter">
     <div class="btn-add-cv">
       <router-link 
       to="/themduan"
       tag="b-button"
       class="mb-2 add-cv icon-tvgs pt-3 pb-3 bg-red-600">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm dự án mới
       </router-link>
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
                <th>Tên dự án</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Nhân sự liên quan</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrProject">
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
                      item.tenDuAn !== null ? item.tenDuAn : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.ngayBatDau !== null ? item.ngayBatDau : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.ngayKetThuc !== null ? item.ngayKetThuc : "null"
                    }}</span>
                  </td>  

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">Nhân sự chính: {{
                      item.nhanSuChinh !== null ? item.nhanSuChinh : "null"
                    }} ,
                    Nhân sự liên quan: {{
                      item.nhanSuLienQuan !== null ? item.nhanSuLienQuan : "null"
                    }}
                    </span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">
                      <i class="menu-icon cursor-pointer flaticon2-edit"></i>
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
//import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";
export default {
  components: {  },
  data() {
    return {
      currentPage: 1,
      rows: 100,
      dataArrProject: [],
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
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListProjectHasPaging",
      "storeqlda/getListDataUser",
    ]),
    custom_label_persion({ text }) {
      return `${text}`;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListProjectHasPaging"](data).then((response) => {
        this.dataArrProject = response.data.data;
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