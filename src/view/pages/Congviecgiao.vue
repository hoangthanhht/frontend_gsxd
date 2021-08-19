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
       <router-link 
       to="/themcongviec"
       tag="b-button"
       class="mb-2 add-cv icon-tvgs pt-3 pb-3">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
       </router-link>
      </div>

      <div class="select-cbb">
        <multiselect
          v-model="selectedPersion"
          multiple
          placeholder="Theo nhân sự"
          :custom-label="custom_label_persion"
          label="name"
          track-by="id"
          selectLabel="Ấn enter để chọn"
          deselectLabel="Ấn enter để bỏ chọn"
          :options="persion"
        >
        </multiselect>
      </div>

      <div class="select-cbb">
        <b-form-select
          v-model="selectedPriorityLevel"
          :options="priority_level"
        >
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
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrAssignedWork">
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
                      item.Ten !== null ? item.Ten : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                     handleGetDate(index)[0]!== null ? handleGetDate(index)[0]: ""
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                     handleGetDate(index)[1]!== null ? handleGetDate(index)[1]: ""
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      handleGetPersion(index)[0] !== null ? handleGetPersion(index)[0] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      handleGetPersion(index)[1] !== null ? handleGetPersion(index)[1] : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.moTaTask !== null ? item.moTaTask : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      item.mucDo !== null ? item.mucDo : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      item.ketQua !== null ? item.ketQua : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      item.tinhTrang !== null ? item.tinhTrang : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      item.luuY !== null ? item.luuY : "null"
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
import { mapActions, mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
  components: { Multiselect },
  data() {
    return {
      text: "",
      currentPage: 1,
      rows: 100,
      dataArrAssignedWork: [],
      selectedPersion: null, // Array reference
      persion: [],
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
  computed: {
    ...mapGetters(["storeqlda/getListDataUserGTer"]),

  },
  created() {
    this["storeqlda/getListDataUser"]().then(() => {
      let arrTemp = this["storeqlda/getListDataUserGTer"];
      for (var i in arrTemp) {
        let data = {
          id: arrTemp[i].id,
          text: arrTemp[i].name,
        };
        this.persion.push(data);
        }
    });
  },
  mounted() {
     this.$store.dispatch(SET_BREADCRUMB, [{ title: "Công việc giao" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListTaskHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/destroyTaskWithId",
      
    ]),
    handleGetPersion(index){
       let arrTemp =[];
        let persionAssign = "";
      let persionDo = "";
       if (this.dataArrAssignedWork[index].nguoiDeXuat) {
          arrTemp = JSON.parse(this.dataArrAssignedWork[index].nguoiDeXuat);
         for (var i in arrTemp) {
            if(persionAssign=='') {
              persionAssign = arrTemp[i].text
            }else{
              persionAssign = persionAssign + ',' + arrTemp[i].text
            }
         }
       }
       if (this.dataArrAssignedWork[index].nguoiPhoiHop) {
          arrTemp = JSON.parse(this.dataArrAssignedWork[index].nguoiPhoiHop);
         for (var j in arrTemp) {
            if(persionDo=='') {
              persionDo = arrTemp[j].text
            }else{
              persionDo = persionDo + ',' + arrTemp[j].text
            }
         }
       }
        arrTemp =[];
      if(persionAssign){
        arrTemp.push(persionAssign);
      }
       if(persionDo){
         arrTemp.push(persionDo);
       }
      return arrTemp;
    },
    handleGetDate(index){
       let datePlan = "";
      let dateReal = "";
      let arrTemp =[];
      if (this.dataArrAssignedWork[index].keHoach) {
       arrTemp = JSON.parse(this.dataArrAssignedWork[index].keHoach);
        let arrTimeStartKh = arrTemp[0].split("-");
        let arrTimeFinishKh = arrTemp[1].split("-");
        datePlan =
          "Bắt đầu : " +
          arrTimeStartKh[2] +
          "/" +
          arrTimeStartKh[1] +
          "/" +
          arrTimeStartKh[0] +
          "," +
          "Kết thúc " +
          arrTimeFinishKh[2] +
          "/" +
          arrTimeFinishKh[1] +
          "/" +
          arrTimeFinishKh[0];
      }
      if (this.dataArrAssignedWork[index].thucHien) { 
         arrTemp = JSON.parse(this.dataArrAssignedWork[index].thucHien);
        let arrTimeStartReal = arrTemp[0].split("-");
        let arrTimeFinishReal =arrTemp[1].split("-");
        dateReal =
          "Bắt đầu : " +
          arrTimeStartReal[2] +
          "/" +
          arrTimeStartReal[1] +
          "/" +
          arrTimeStartReal[0] +
          "," +
          "Kết thúc " +
          arrTimeFinishReal[2] +
          "/" +
          arrTimeFinishReal[1] +
          "/" +
          arrTimeFinishReal[0];
      }
      arrTemp =[];
      if(datePlan){
        arrTemp.push(datePlan);
      }
       if(datePlan){
         arrTemp.push(dateReal);
       }
      return arrTemp;

    },
      handleDelete(index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyTaskWithId"](this.dataArrAssignedWork[index].id).
        then((res)=>
        {
          this.dataArr(this.currentPage);
          alert(res.data.msg)
        })
      }
  },
    handleEdit(index) {
      let id = this.dataArrAssignedWork[index].id
      this.$router.push(`/themcongviec/${id}`);
    },
    custom_label_persion({ text }) {
      return `${text}`;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListTaskHasPaging"](data).then((response) => {
        this.dataArrAssignedWork = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.search-congv input[type="search"] {
  height: 43px;
}

.btn-add-cv {
  height: 40px;
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
.select-cbb .custom-select {
  height: 43px;
}
.select-cbb {
  max-width: 200px;
}
.header-page-giaocv {
  margin-left: 10px;
  margin-right: 10px;
}
.table-cv {
  background-color: #fff;
}
.card-body {
 background-color: #fff;
}
.multiselect, .multiselect__input, .multiselect__single {
    font-size: 1rem;
}
.multiselect__placeholder {
    font-size: 1rem;
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